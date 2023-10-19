import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './security.css'
import { useHistory } from 'react-router'

const Security:React.FC = () => {
    const updatePassword = (e) => {
        e.preventDefault();
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