import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './signup.css'
import Claps from '../assets/Claps.png'



const SignUp:React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='signup-container'>
            <div className='signup-image'>
                <img src={Claps} />
            </div>

            <div className='signup-writeup'>
                <h1>Sign Up</h1>
                <p>It was popularised in the 
                    1960s with the release of
                    Letraset sheet containing
                    Lorem Ipsum.
                </p>
            </div>

            <form className='signup-form'>
                <input type='text'
                placeholder='First Name'
                required/>

                <input type='text'
                placeholder='Last Name'
                required />

                <input type='email'
                placeholder='Email'
                required />

                <input type='text'
                placeholder='Phone Number'
                required />

                <input type='text'
                placeholder='User/Lawyer'
                required />

                <input type='password'
                placeholder='password'
                required />

                <input type='password'
                placeholder='Confirm Password'
                required />

                <div className='checkbox-container'>
                <input type='checkbox' 
                name='terms'
                id='terms'
                required/>
                <label for='terms'>
                    <p>
                        I agree to The
                        <a>Terms of Service</a>  and 
                        <a> Privacy Policy
                        </a>
                    </p>
                </label>
                </div>

                <button type='submit'
                className='signup-button'>
                Create Account
                </button>
            </form>

            <div className='account-signup'>
                <h4>Do you have an account? 
                <a href='/signin'>Sign In</a>
                </h4>
            </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default SignUp