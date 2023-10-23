import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './security.css'
import { useHistory } from 'react-router'
import { API_URL } from '../apiConfig'
import axios from 'axios'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { setUserData } from '../redux/userSlice'

const Security:React.FC = () => {

    const current_password = useRef<HTMLInputElement>();
    const password = useRef<HTMLInputElement>();
    const password_confirmation = useRef<HTMLInputElement>();

    const userData = useSelector(setUserData);

    const token = userData.payload.user.data.token

    const updatePassword = async (e) => {
        e.preventDefault();

        const data = {
            current_password: current_password.current.value || '',
            password: password.current.value || '',
            password_confirmation: password_confirmation.current.value || '',
            token: token
        }

        try {
            console.log(data);
            const updatedPassword = await axios.post(`${API_URL}/update-password`, data, {
                headers: {
                    Accept: 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`
                },
            });
            console.log('Password Successfully Changed', updatedPassword);
        } catch (error) {
            console.log('Password Update Unsuccessful', error);
            console.log('Password Not Changed', error.message)
        }
    }

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack} onClick={previousPage}></IonIcon>
                <IonTitle>Security</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='security-container'>
                <div className='security-form-container'>
                    <form onSubmit={updatePassword} className='security-form'>
                    <label>Current Password</label>
                    <input type='password'
                    ref={current_password}
                    placeholder='************'
                    required />

                    <label>New Password</label>
                    <input type='password'
                    ref={password}
                    placeholder='************'
                    required />

                    <label>Confirm Password</label>
                    <input type='password'
                    ref={password_confirmation}
                    placeholder='************'
                    required />

                    <button type='submit'>
                        Save Password
                    </button>
                    </form>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Security