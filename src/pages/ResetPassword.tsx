import React, { useState } from 'react'
import { IonContent, IonIcon, IonPage, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import './resetpassword.css'
import { remove, arrowBack } from 'ionicons/icons';
import Message from '../assets/message.png'
import { useHistory } from 'react-router';

const ResetPassword:React.FC = () => {
    const resetPassword3 = (e) => {
        e.preventDefault();
    }

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
        console.log('Back');
    }

    const [passwordReset, setPasswordReset] = useState(false)
    const [otp, setOtp] = useState(false)
    const [mainReset, setMainReset] = useState(true)

    const showPage1 = () => {
        setPasswordReset(true);
        setOtp(false);
        setMainReset(false);
    }

    const showPage2 = () => {
        setOtp(true);
        setPasswordReset(false);
        setMainReset(false)
    }

    const showPage3 = () => {
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
            className='reset_password_container'>
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
                    <h1>Reset Password</h1>
                    <p>
                        It was popularised in the 1960s
                        with the release of Letraset
                        sheetscontaining Lorem Ipsum.
                    </p>
                </div>

                <div className='reset-password'>
                    <form onSubmit={resetPassword3}
                    className='reset-form'>
                        <input type='password'
                        placeholder='New Password'
                        required
                        />

                        <input type='password'
                        placeholder='Confirm Password'
                        required
                        />

                        <button type='submit'
                        className='reset-password-button'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default ResetPassword