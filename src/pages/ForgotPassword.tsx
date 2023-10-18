import React, { useState } from 'react'
import { IonContent, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './forgotpassword.css'
import { remove, arrowBack } from 'ionicons/icons';
import Message from '../assets/message.png'
import { useHistory } from 'react-router';

const ForgotPassword:React.FC = () => {
    const resetPassword1 = (e) => {
        e.preventDefault();
    }

    const history = useHistory();

    const previousPage = () => {
        history.goBack()
    }

    const [passwordReset, setPasswordReset] = useState(true)
    const [otp, setOtp] = useState(false)
    const [mainReset, setMainReset] = useState(false)

    const showPage1 = () => {
        history.push('/forget-password')
        setPasswordReset(true);
        setOtp(false);
        setMainReset(false);
    }

    const showPage2 = () => {
        history.push('/otp')
        setOtp(true);
        setPasswordReset(false);
        setMainReset(false)
    }

    const showPage3 = () => {
        history.push('/reset-password')
        setMainReset(true);
        setPasswordReset(false);
        setOtp(false);
    }

  return (
    <IonPage>
        {/* <IonHeader>
            <IonToolbar>
                <IonTitle></IonTitle>
            </IonToolbar>
        </IonHeader> */}
        <IonContent>
            <div
            className='forgot_password_container'>
                <div className='back-button' onClick={previousPage}>
                    <IonIcon icon={arrowBack}></IonIcon>
                </div>

                <div className='fgt-password-state'>
                    <IonIcon icon={remove}
                    className={passwordReset ? 'active' : ''}
                    onClick={showPage1}
                    ></IonIcon>
                    <IonIcon icon={remove}
                    className={otp ? 'active' : ''}
                    onClick={showPage2}
                    ></IonIcon>
                    <IonIcon icon={remove}
                    className={mainReset ? 'active' : ''}
                    onClick={showPage3}
                    ></IonIcon>
                </div>

                <div className='message-container'>
                    <img src={Message} />
                </div>

                <div className='msg-text-container'>
                    <h1>Forgot Password</h1>
                    <p>
                        It was popularised in the 1960s
                        with the release of Letraset
                        sheetscontaining Lorem Ipsum.
                    </p>
                </div>

                <div className='reset-password'>
                    <form onSubmit={resetPassword1}
                    className='reset-form'>
                        <input type='email'
                        placeholder='Email ID'
                        required
                        />

                        <button type='submit'
                        className='reset-password-button'>
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default ForgotPassword