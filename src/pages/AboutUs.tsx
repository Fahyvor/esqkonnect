import React from 'react'
import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBack } from 'ionicons/icons'
import './aboutus.css'
import { useHistory } from 'react-router'

const AboutUs:React.FC = () => {

    const history = useHistory();

    const previousPage = () => {
        history.goBack()
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='header-container'>
                <IonIcon icon={arrowBack} onClick={previousPage}></IonIcon>
                <IonTitle>About Us</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='about-container'>
                <div className='about'>
                    <p>
                    Looking started he up perhaps against.
                    How remainder all additions get elsewhere
                    resources. One missed shy wishes supply
                    design answer formed. Prevent on present
                    hastily passage an subject in be. Be happiness
                    arranging so newspaper defective affection ye.
                    </p>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default AboutUs