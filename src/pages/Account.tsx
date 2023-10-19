import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import UploadAccount from '../assets/uploadAccount.png'
import { arrowBack } from 'ionicons/icons'
import './account.css'
import { useHistory } from 'react-router'

const Account:React.FC = () => {
    const updateProfile = (e) => {
        e.preventDefault();
    }

    const history = useHistory();

    const PreviousPage = () => {
        history.goBack();
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack} onClick={PreviousPage}></IonIcon>
                <IonTitle>Account</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='account-container'>
                <div className='change-profile-container'>
                .
                </div>
                <div className="change-profile-image">
                    <img src={UploadAccount} />
                </div>

                <div className='account-form-container'>
                    <form onSubmit={updateProfile} className='account-form'>
                    <label>First Name</label>
                    <input type='text' placeholder='Johnson'
                    required />

                    <label>Last Name</label>
                    <input type='text' placeholder='Bankole'
                    required />

                    <label>Email</label>
                    <input type='email' placeholder='bankole@gmail.com'
                    required />

                    <label>Phone</label>
                    <input type='text' placeholder='+2348033242545'
                    required />

                    <button type='submit'>
                        Update Profile
                    </button>
                    </form>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Account