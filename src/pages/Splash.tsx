import { IonContent, IonPage} from '@ionic/react';
import Logo from '../assets/logo.png'
import './Splash.css'
import { useHistory } from 'react-router';

const Splash: React.FC = () => {
    const history = useHistory();

    const Welcome = () => {
        history.push('/welcome')
    }
  return (
    <IonPage>
        <IonContent fullscreen>
            <div className='splash-container' onClick={Welcome}>
                <img src={Logo} alt='logo' />
                <h1>Esqkonnect</h1>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Splash