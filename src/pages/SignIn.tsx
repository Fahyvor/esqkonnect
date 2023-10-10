import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Claps from '../assets/Claps.png'
import './signin.css'


const SignIn:React.FC = () => {
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

          <form>
            <input type='email'
            placeholder='lawyer@gmail.com'
            required/>

            <input type='password'
            placeholder='password'
            required />

            <div className='forgot-password'>
              <small>Forget password?</small>
            </div>

            <button type='submit'>
              Login
            </button>
          </form>

          <div className='account-signup'>
            <h2>Don't have account? 
              <a href='/signup'>Sign Up</a>
            </h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default SignIn