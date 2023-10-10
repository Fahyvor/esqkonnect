import React, { useState } from 'react';
import { IonContent, IonIcon, IonPage} from '@ionic/react';
import Lawyer from './Lawyer';
import { BsDashLg } from 'react-icons/bs'
import { IoIosRemove } from 'react-icons/io'
import Client from './Client';
import { remove } from 'ionicons/icons';
import './welcome.css'
import { useHistory } from 'react-router';


const Welcome: React.FC = () => {
    const [lawyerState, setLawyerState] = useState(true);
    const [clientState, setClientState] = useState(false);

    const showLawyer = () => {
        setLawyerState(true);
        setClientState(false);
    }

    const showClient = () => {
        setClientState(true);
        setLawyerState(false);
    }

    const history = useHistory();

    const nextPage = () => {
        history.push('/signin');
    }
  return (
    <IonPage>
        <IonContent fullscreen>
        <div className='welcome-container'>
            <div>
            {lawyerState ? (<Lawyer />) : null}
            {clientState ? (<Client />) : null }
            </div>
            <div className='state-container'>
                <IonIcon
                icon={remove} 
                onClick={showLawyer}
                className={lawyerState ? 'active' : ''}
                ></IonIcon>
                <IonIcon
                icon={remove}
                onClick={showClient}
                className={clientState ? 'active' : ''}
                ></IonIcon>
                <div className='next-container'
                onClick={nextPage}>
                <h1><span>Next</span></h1>
                </div>
            </div>
        </div>
        </IonContent>
    </IonPage>
  )
}

export default Welcome