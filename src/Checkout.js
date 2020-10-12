import React from 'react'
import './CHeckout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './Stateprovider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div>
            <div className="checkout">
                    <div className="checkout_left">

                        <h2 className ="checkout_title"> Your Shopping Basket</h2>
                        {basket.map((item)=>(
                            <CheckoutProduct id ={item.id} 

                            title={item.title} 
                            price={item.price} 
                            image={item.image}/>

                        ))}


                    </div>
                    <div className="checkout_right">
                        <Subtotal/>

                    </div>
                    </div>
        </div>
    )
}

export default Checkout
