import React,{useState,useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './Stateprovider'
import {Link,useHistory} from 'react-router-dom'
import { useElements , useStripe,CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasket } from './Reducer';
import axios from './axios'
import { db } from './Firebase'


function Payment() {

    const history = useHistory();
    
    const stripe= useStripe();
    const elements = useElements();
    const [error , setError]=useState(null)
    const [disable,setDisable] = useState(true)
    const [processing , setProcessing] = useState('')
    const [succeeded , setSucceeded] = useState(true)
    const [clientSecret , setClientSecret] = useState('')

    const [{basket,user},dispatch] = useStateValue();


    useEffect(()=>{
        //generate spectela stripe secret that allows us to charge customer

        const getClientSecret= async()=>{
            const response = await axios({
                method:'post',
                //total in currencies 
                url:`/payments/create?total=${getBasket(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();


    },[basket])

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setProcessing(true);
         const payload = await stripe.confirmCardPayment(clientSecret,{
             payment_method:{
                 card: elements.getElement(CardElement)
             }

         }).then(({paymentIntent})=>{

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')
         })

    }

    const handleChange =(e)=>{
        setDisable(e.empty);
        setError(e.error?e.error.message:"")

    }
    return (
        <div className="Payment_Page">
            <div className="payment_container">
    <h1>Checkout (<Link to = "/checkout">{basket?.length} items</Link>)</h1>
    <div className="payment_section">
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <h2>Delivery Adress</h2>
                    <p>181,gaytri vihar colony</p>
                </div>

                </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
                </div>
                
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_pricecontainer">
                            <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasket(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                     <button disabled={processing || disable || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                
            </div>
            </div> 
        </div>
    )
}

export default Payment
