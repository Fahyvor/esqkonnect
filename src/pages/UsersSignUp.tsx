    import React, { useState, ChangeEvent, FormEvent, useRef } from 'react'
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
    import './userssignup.css'
    import Claps from '../assets/Claps.png'
    import axios from 'axios';
    import { API_URL } from '../apiConfig';
    import { useHistory } from 'react-router';

    const ClientsSignUp:React.FC = () => {

        const history = useHistory();

        const first_name = useRef<HTMLInputElement>(null);
        const last_name = useRef<HTMLInputElement>(null);
        const email = useRef<HTMLInputElement>(null);
        const phone = useRef<HTMLInputElement>();
        const user_type = useRef<HTMLInputElement>(null);
        const password = useRef<HTMLInputElement>(null);
        const password_confirmation = useRef<HTMLInputElement>(null);
        

        const handleSignUpSubmit = async (e: FormEvent) => {
            e.preventDefault();
        
            const data = {
            first_name: first_name.current?.value || '',
            last_name: last_name.current?.value || '',
            email: email.current?.value || '',
            phone: phone.current?.value || '',
            user_type: user_type.current?.value || 'user',
            password: password.current?.value || '',
            password_confirmation: password_confirmation.current?.value || '',
            };
        
            try {
            console.log('Request Data:', data);
            const user = await axios.post(`${API_URL}/register`, data, {
                headers: {
                Accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                },
            });
            console.log('User Created', user.data);

            if (first_name.current) first_name.current.value = '';
            if (last_name.current) last_name.current.value = '';
            if (email.current) email.current.value = '';
            if (phone.current) phone.current.value = '';
            if (user_type.current) user_type.current.value = '';
            if (password.current) password.current.value = '';
            if (password_confirmation.current) password_confirmation.current.value = '';
            
            history.push('/signin');
            } catch (error) {
            console.log('User not registered', error);
            console.log('Response Data:', error.response.data);
            }
        };
        
        
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
                    placeholder='+234'
                    name='phone'
                    ref={phone}
                    // pattern='[+]234[0-9]{10}'
                    required
                    />
            
                    <input type='text'
                    placeholder='user_type'
                    name='user_type'
                    ref={user_type}
                    value="user"
                    className='hide-input'
                    required />

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