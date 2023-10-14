import React, { useState, ChangeEvent, FormEvent, useRef } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './clientssignup.css'
import Claps from '../assets/Claps.png'

const ClientsSignUp:React.FC = () => {

    const first_name = useRef<HTMLInputElement>(null);
    const last_name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const phone = useRef();
    const user_type = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const password_confirmation = useRef<HTMLInputElement>(null);
    

    const handleSignUpSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        const newUser = {
            first_name: first_name.current?.value || '',
            last_name: last_name.current?.value || '',
            email: email.current?.value || '',
            phone: parseInt(phone.current?.value || ''),
            user_type: "Client",
            password: password.current?.value || '',
            password_confirmation: password_confirmation.current?.value || '',
        };

        try {
            await console.log(newUser);
        } catch (error) {
            console.log('User not registered', error)
        }
    }
    
    // const [showPassword, setShowPassword] = useState('Hide Password');

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };
return (
    <IonPage>
        <IonContent fullscreen>
            <div className='signup-container'>
            <div className='signup-image'>
                <img src={Claps} alt='image'/>
            </div>

            <div className='signup-writeup'>
                <h1>Sign Up</h1>
                <p>It was popularised in the 
                    1960s with the release of
                    Letraset sheet containing
                    Lorem Ipsum.
                </p>
            </div>

            <form className='signup-form' onSubmit={handleSignUpSubmit}>
                <input type='text'
                placeholder='First Name'
                name='first_name'
                ref={first_name}
                required/>

                <input type='text'
                placeholder='Last Name'
                name='last_name'
                ref={last_name}
                required />

                <input type='email'
                placeholder='Email'
                name='email'
                ref={email}
                required />

                <input
                type='tel'
                placeholder='234'
                name='phone'
                ref={phone}
                pattern='234[0-9]{10}'
                required
                />


                <select id="user_type" name="user_type">
                    <option value="lawyer">Lawyer</option>
                    <option value="user">User</option>
                </select>

                <input type='password'
                placeholder='password'
                name='password'
                ref={password}
                required />
                {/* <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide Password' : 'Show Password'}
                </button> */}

                <input type='password'
                placeholder='Confirm Password'
                name='password_confirmation'
                ref={password_confirmation}
                required />

                <div className='checkbox-container'>
                <input type='checkbox' 
                name='terms'
                id='terms'
                required/>
                <label htmlFor='terms'>
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

export default ClientsSignUp