import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';

function CheckoutProduct({id, title,price,image}) {

    const [{basket},dispatch]= useStateValue();
    console.log(basket);

     const removeItem=()=>{
         dispatch({
             type:'Remove_From_Basket',
             id:id
         })

     }
    return (
        <div className="CheckoutProduct">
            <img className="checkout_image" src={image} alt="checkout image"/>
            <div className="checkout_info">
    <p className="checkout_title">{title}</p>

           
            <p className="checkout_price">
                <small>
                    ₹
                </small>
                <strong>{price}</strong>

            </p>
            <button onClick={removeItem}>Remove Product</button>
           </div>
            
        </div> 
    )
}

export default CheckoutProduct
