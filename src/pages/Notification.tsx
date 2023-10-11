import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './notification.css'

const Notification:React.FC = () => {
    const updatePassword = (e) => {
        e.preventDefault();
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack}></IonIcon>
                <IonTitle>Notification</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='notification-container'>
                <div className='notification'>
                    <p>Your profile was approved</p>
                    <small>7 month ago</small>
                </div>

                <div className='notification'>
                    <p>Your profile was approved</p>
                    <small>7 month ago</small>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Notification