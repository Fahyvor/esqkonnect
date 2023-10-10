import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ClientImage from '../assets/Client.png'
import Okay from '../assets/Ok.png'
import './client.css'

const Client: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='client-welcome'>
                <div className='client-image'>
                    <img src={ClientImage} alt='Client' />
                </div>

                <div className='client-text-container'>
                    <h1>The Best Place to</h1>
                    <h3>find the right Client
                        <span><img src={Okay} alt='icon' /></span>
                    </h3>

                    <p>Find the Right Client for Your Legal Issue!</p>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Client