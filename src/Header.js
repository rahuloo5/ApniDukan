import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import {Link} from 'react-router-dom'
import {useStateValue} from './Stateprovider'
import {auth} from './Firebase'

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

 function Header() {

    const [{basket,user}, dispatch] = useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            
        <Link to ={user && "/"} >
        <img className="header_logo" src={require('./images/logoo.PNG')} alt="logo"/>
        </Link>
      
            <div className="header_searchname">
                <input type="text" className="header-search" placeholder="        Search Your Product"/>
                <SearchIcon style={{height:25}}/>
               
            </div>
            <div className="header_nav">
                <Link to ="./Login">
                <div onClick={handleAuthentication} className="header_option">
                    <span  className="header_optionone">
                        Hello Guest
                    </span>
                    <span  className="header_optiontwo">{user?'SIgn Out' : 'Sign In'}
                        
                    </span>
                    </div>
                    </Link>

                <div className="header_option">
                    <span  className="header_optionone">
                        Return
                    </span>
                    <span  className="header_optiontwo">
                        Orders
                    </span>

                </div>


            </div>
            <div className="basket">
                <Link to ="/checkout">
                <ShoppingBasketIcon style={{height:50,width:40,margin:10}}/>
                </Link>
    <span style={{marginRight:10}}>{basket?.length}</span>
            </div>
           
            </div>

            
        
        
    )
}

export default Header