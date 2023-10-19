import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { chevronBack } from 'ionicons/icons';
import MessageImage from '../assets/lawyerDetailsImage.png'
import './messages.css'


const Messages = () => {

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='icon-container'>
                    <IonIcon icon={chevronBack}  onClick={previousPage}></IonIcon>
                </div>
                <IonTitle>Messages</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className='messages-container'>
                <div className='message'>
                    <div className='message-image'>
                        <img src={MessageImage} />
                    </div>

                    <div className='name-and-message'>
                        <h4>Rako Christian</h4>
                        <p>Sure I will start from the beginning
                            and share all the documents. Do..
                        </p>
                    </div>

                    <div className='time-and-number'>
                        <h6>10:02AM</h6>
                        <div className='number-of-messages'>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Messages