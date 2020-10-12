import React ,{useEffect}from 'react';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Payment'
import './App.css';
import { auth } from './Firebase.js';
import { useStateValue } from './Stateprovider.js';
import Orders from './Orders'

const promise = loadStripe(
  'pk_test_51HZ91rD7gu8ZlEDEGUSLEyytKYPxaEBXpn6gk7Lqzthp4hXfP8hjs8fGFsvQiSiFm7hQumN69d0UAigpjWJ9RVnj00h091zkqx');

function App() {

  const[{}, dispatch]= useStateValue();

useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    if(authUser){
dispatch({
  type:'SET_USER',
  user:authUser
})

 }
 else{
   dispatch({
     type:'SET_USER',
     user:null
   })
 }

  })

  
}, [])

  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route exact path ="/Login">
            <Login/>
          </Route>
        
          <Route exact path ="/checkout">
          <Header/>
            <Checkout/>

          </Route>
          <Route exact path ="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
            

          </Route>
        

          <Route exact path="/">
          <Header/>
            <Home/>
      </Route>

      
      <Route exact path="/orders">
          <Header/>
            <Orders/>
      </Route>
        </Switch>
      
      </Router>
    
    </div>
  );
}

export default App;
