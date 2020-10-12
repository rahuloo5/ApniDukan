import React,{useState} from 'react'
import { Link , useHistory} from 'react-router-dom';
import './Login.css'
import {auth} from './Firebase'

function Login() {

    const history = useHistory();
    const[email , setEmail] = useState('');
    const[password, setPassword]= useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to ="/">
            <img className="login_logo" src={require('./images/logo.png')} alt="loginlogo"/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h4>EMAIL</h4>
                    <input type="email" placeholder="enter your email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)}  />
                    <h4>PASSOWRD</h4>
                    <input type="password" placeholder ="enter your password"
                    value={password} onChange ={(e)=>setPassword(e.target.value)}/>
                    <button className="login_signinbutton" type="submit" onClick={signIn}>SignIN</button>
                    </form>

                    <button className="signup_button" onClick={register} >Sign Up</button>
                     </div>
            
        </div>
    )
}

export default Login
