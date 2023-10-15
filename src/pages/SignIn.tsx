import React, { FormEvent, useRef } from 'react'
import { IonContent, IonPage } from '@ionic/react';
import Claps from '../assets/Claps.png'
import './signin.css'
import axios from 'axios';
import { API_URL } from '../apiConfig';
import { useHistory } from 'react-router';


const SignIn:React.FC = () => {

  const history =  useHistory();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSignInSubmit = async ( e: FormEvent ) => {
      e.preventDefault();

      const data = {
        email : email.current?.value || '',
        password: password.current?.value || ''
      };

      try {
        // console.log('User LoggedIn', data);
        const userLogin = await axios.post(`${API_URL}/login`, data, {
          headers: {
            Accept: 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
          },
        });
        console.log('Login Successful', userLogin.data);

        if( userLogin && userLogin.data.token) {
          localStorage.setItem('token', userLogin.data.token);
          history.push('/profile');
        }
      } catch (error) {
        console.log('Login Unssuccessful', error);
        console.log('Error Messgage', error.response.data)
      }
  }
  return (
    <IonPage>
      <IonContent>
        <div className='signin-container'>
          <div className='signin-image'>
            <img src={Claps} />
          </div>

          <div className='signin-writeup'>
            <h1>Sign In</h1>
            <p>welcome back</p>
          </div>

          <form className='signin-form' onSubmit={handleSignInSubmit}>
            <input type='email'
            placeholder='lawyer@gmail.com'
            ref={email}
            required/>

            <input type='password'
            placeholder='password'
            ref={password}
            required />

            <div className='forgot-password'>
              <a href='/forget-password'>Forget password?</a>
            </div>

            <button type='submit'
            className='submit-button'>
              Login
            </button>
          </form>

          <div className='account-signup'>
            <h4>Don't have account? 
              <a href='/signup'>Sign Up</a>
            </h4>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default SignIn