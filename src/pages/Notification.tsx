import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './notification.css'
import { useHistory } from 'react-router'

const Notification:React.FC = () => {
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