import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LawyerImage from '../assets/Lawyer.png'
import Okay from '../assets/Ok.png'
import './lawyer.css'

const Lawyer: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='lawyer-welcome'>
                <div className='lawyer_image'>
                    <img src={LawyerImage} alt='lawyer' />
                </div>

                <div className='lawyer-text-container'>
                    <h1>The Best Place to</h1>
                    <h3>find the right lawyer
                        <span><img src={Okay} alt='icon' /></span>
                    </h3>

                    <p>Find the Right Lawyer for Your Legal Issue!</p>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Lawyer