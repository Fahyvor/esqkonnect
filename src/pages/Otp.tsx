import React, { useState } from 'react'
import { IonContent, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './otp.css'
import { remove, arrowBack } from 'ionicons/icons';
import Message from '../assets/message.png'
import { useHistory } from 'react-router';

const Otp:React.FC = () => {
    const resetPassword2 = (e) => {
        e.preventDefault();
    }

    const history = useHistory()

    const previousPage = () => {
        history.goBack()
    }

    const [passwordReset, setPasswordReset] = useState(false)
    const [otp, setOtp] = useState(true)
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
        setMainReset(false);
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
            className='otp_container'>
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
                    <h1>Enter OTP</h1>
                    <p>
                        Enter the OTP code we just sent
                        you on your registered Email/Phone number
                    </p>
                </div>

                <div className='reset-password'>
                    <form onSubmit={resetPassword2}
                    className='reset-form'>
                        <input type='email'
                        placeholder='OTP'
                        required
                        />

                        <button type='submit'
                        className='reset-password-button'>
                            Reset Password
                        </button>
                    </form>

                    <div className='otp-not-found'>
                        <p>Didn't get OTP? 
                            <a href=''>Resend OTP</a>
                        </p>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Otp