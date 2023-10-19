import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { cameraOutline, chevronBack, ellipsisVerticalOutline } from 'ionicons/icons';
import React from 'react'
import { useHistory } from 'react-router';
import './chat.css'

const Chat = () => {

    const history = useHistory()

    const previousPage = () => {
        history.goBack();
    }

    const sendMessage = (e) => {
        e.preventDefault()
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <div className='icon-container'>
                    <IonIcon icon={chevronBack}  onClick={previousPage}></IonIcon>
                </div>
                <IonTitle>Rako Christian</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <div className='chat-container'>
                <div className='sender-chat'>
                    <p>Hello There</p>
                </div>

                <div className='receivers-chat'>
                    <p>Hey hi</p>
                </div>

                <div className='send-and-input'>
                    <form onSubmit={sendMessage} 
                    className='message-input'>
                        <input placeholder='Type here...'
                            type='text'
                            name='message'
                            required
                        />
                        <IonIcon icon={cameraOutline}></IonIcon>
                        <IonIcon icon={ellipsisVerticalOutline}></IonIcon>
                    </form>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Chat