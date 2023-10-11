import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './security.css'

const Security:React.FC = () => {
    const updatePassword = (e) => {
        e.preventDefault();
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack}></IonIcon>
                <IonTitle>Security</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='security-container'>
                <div className='security-form-container'>
                    <form onSubmit={updatePassword} className='security-form'>
                    <label>Current Password</label>
                    <input type='password' placeholder='************'
                    required />

                    <label>New Password</label>
                    <input type='password' placeholder='************'
                    required />

                    <label>Confirm Password</label>
                    <input type='password' placeholder='************'
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