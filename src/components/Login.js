import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import '../style/Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login things...
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //some fancy firebase REGISTER things...
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // It successfully created a new User with Email and Password
            //   console.log(auth);
            if(auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'> 
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt='Amazon-Logo'
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit ' className='login__signInButton' onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p>
                    By Signin-in you agree to Amazon's conditions of use & sale. Please see our Privacy Notice, our Cookie Notice and Interest Base Ads Notice 
                </p>
                <button type='submit' className='login__registerButton' onClick={register}>
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
