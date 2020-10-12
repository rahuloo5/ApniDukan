import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css';
import {useStateValue} from './Stateprovider'
import { getBasket } from './Reducer';
import {useHistory} from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className= "subtotal">
            <CurrencyFormat 
            renderText ={(value)=>(
                <>
                <p>
                    subtotal({basket?.length} items):
            <strong>{value}</strong></p>
            <small className="subtotal_gift">
                <input type ="checkbox"/>This Order contains gift
            </small>
                </>

            )}
            decimalScale={2}
            value={getBasket(basket)}
            displayType ={'text'}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={(e)=>history.push('/payment')} className="subtotal_button">Procced to Checkout</button>
        </div>
    )
}

export default Subtotal
