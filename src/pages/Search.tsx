import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './search.css'
import { chevronBack } from 'ionicons/icons';
import LawyerImage from '../assets/lawyer2.png'
import { useHistory } from 'react-router';
import { API_URL } from '../apiConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Search = () => {

    interface Lawyer {
        first_name: string,
        last_name: string,
        email: string,
        phone_number: number,
        user_type: string,
        years_of_practice: string,
    }

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }

    const lawyersFullDetails = (uuid: string) => {
        history.push(`/lawyers-full-details/${uuid}`)
    }

    const [allLaywers, setAllLawyers] = useState<Lawyer[]>([])

    useEffect(() => {
        axios.get(`${API_URL}/lawyers`, {
            headers: {
                Accept : 'application/vnd.api+json',
            }
        })
        .then((response) => {
            const lawyersArray: Lawyer[] = response.data.data.user;
            const availableLawyers = lawyersArray.sort((p1, p2) => p1.id - p2.id);
            setAllLawyers(availableLawyers);
        })
        .catch((error) => {
            console.log('Error in fetching Lawyer', error);
        });
    }, []);
  return (
    <IonPage>
        <IonToolbar>
            <div className='icon-container' >
            <IonIcon icon={chevronBack} onClick={previousPage}></IonIcon>
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

                {allLaywers.map((lawyer, index) => (
                <div className='lawyers-list' key={index}>
                    <div className='lawyer-image'>
                        <img src={LawyerImage} />
                    </div>

                    <div className='lawyer-name'>
                        <h5>{lawyer.first_name} {lawyer.last_name}</h5>
                        <p>Criminal Lawyer</p>
                        <p>Corporate Lawyer</p>
                    </div>

                    <div className='experience-year'>
                        <h5>Exp</h5>
                        <p>{lawyer.years_of_practice ? `${lawyer.years_of_practice}+ years` : 'Experience not specified'}</p>
                    </div>

                    <div className='location'>
                        <h5>Location</h5>
                        <p>NGN</p>

                        <div className='view-button' onClick={lawyersFullDetails}>
                            <h6>View</h6>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Search