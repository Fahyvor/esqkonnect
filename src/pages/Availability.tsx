import React, { useState } from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './availability.css'
import { useHistory } from 'react-router'
import { toggleOutline } from 'ionicons/icons'

const Availability:React.FC = () => {
    
    const history = useHistory();

    const previousPage = () => {
        history.goBack()
    }

    const [userAvailable, setUserAvailable] = useState(false)
    const [isActive, setActive] = useState('toggle-on')

    const availabilityStatus = () => {
        setUserAvailable(true);
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack} onClick={previousPage}></IonIcon>
                <IonTitle>Availability</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='notification-container'>
                <div className='notification'>
                    <h3>Available</h3>
                </div>

                <div className='notification-toggle' onClick={availabilityStatus}>
                    <IonIcon icon={toggleOutline}></IonIcon>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Availability