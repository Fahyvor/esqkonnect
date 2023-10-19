import React from 'react'
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './search.css'
import { chevronBack } from 'ionicons/icons';
import LawyerImage from '../assets/lawyer2.png'
import { useHistory } from 'react-router';

const Search = () => {

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }
  return (
    <IonPage>
        <IonToolbar>
            <div className='icon-container' onClick={previousPage}>
            <IonIcon icon={chevronBack}></IonIcon>
            </div>
            <IonTitle>
                Search Lawyer
            </IonTitle>
        </IonToolbar>
        <IonContent>
            <div className='search-container'>
                <div className='search-headers'>
                    <div className='exp-and-country'>
                        <div className='exp-level'>
                            <h4>Exp Level</h4>
                        </div>

                        <div className='country'>
                            <h4>Country</h4>

                        </div>
                    </div>
                    
                    <div className='areas'>
                        <h4>Areas of Practice</h4>
                    </div>
                </div>

                <div className='lawyers-list'>
                    <div className='lawyer-image'>
                        <img src={LawyerImage} />
                    </div>

                    <div className='lawyer-name'>
                        <h5>Surenda</h5>
                        <p>Criminal Lawyer</p>
                        <p>Corporate Lawyer</p>
                    </div>

                    <div className='experience-year'>
                        <h5>Exp</h5>
                        <p>11+  years</p>
                    </div>

                    <div className='location'>
                        <h5>Location</h5>
                        <p>NGN</p>

                        <div className='view-button'>
                            <h6>View</h6>
                        </div>
                    </div>
                </div>

                
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Search