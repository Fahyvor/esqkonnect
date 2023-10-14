import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './decision.css'
import { chevronForward } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Decision: React.FC = () => {
    const history = useHistory();

    const lawyerForm = () => {
        history.push('/lawyers-signup');
    }

    const clientForm = () => {
        history.push('/clients-signup');
    }
  return (
    <IonPage>
        <IonContent>
            <div className='decision-container'>
                <div className='lawyer-gateway' onClick={lawyerForm}>
                    <div className='lawyer-gateway-left'>
                        <h2>Provide Legal Solutions</h2>
                        <p>Request to work for a Client</p>
                    </div>
                    <IonIcon icon={chevronForward} />
                </div>

                <div className='client-gateway' onClick={clientForm}>
                    <div className='client-gateway-left'>
                        <h2>Need Legal Solutions?</h2>
                        <p>Hire a Lawyer</p>
                    </div>
                    <IonIcon icon={chevronForward} />
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Decision