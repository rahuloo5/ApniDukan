import React from 'react'
import './Product.css'
import {useStateValue} from './Stateprovider'

export default function Product({id,title,image,price}) {

    const [{basket},dispatch] = useStateValue();

    const AddToBasket=()=>{
        dispatch({
            type:"ADD_To_Basket",
            item:{
                id:id,
                title:title,
                image:image,
                price:price
            }
        })



    }
    return (
        <div className="product">
            <div classNmae="product_info">
    <p>{title}</p>
                <p className="product_price">
                    <small>
                        ₹
                    </small>
                    <strong>{price}</strong>
                </p>
                </div>
                <img src={image} alt="product" className="product_image" />
                <button onClick={AddToBasket}>Add to basket</button>
                </div>
            
       
    )
}
