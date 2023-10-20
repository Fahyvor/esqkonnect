import { useEffect, useState } from 'react';
import { IonContent, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { chatbubblesOutline, chevronBack } from 'ionicons/icons';
import './lawyersdetails.css'
import LawyerDetailsImage from '../assets/lawyerDetailsImage.png'
import Shanti from '../assets/shanti.png'
import { API_URL } from '../apiConfig';
import axios from 'axios';

const LawyerDetails = () => {

    interface Lawyer {
        first_name: string,
        last_name: string,
        email: string,
        phone_number: number,
        user_type: string,
        bio: string,
    }

    const [lawyersDetail, setLawyerDetail] = useState<Lawyer[]>([])

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }

    useEffect(() => {
        axios.get(`${API_URL}/lawyers`, {
            headers: {
                Accept : 'application/vnd.api+json',
            }
        })
        .then((response) => {
            const lawyersArray: Lawyer[] = response.data.data.user;
            const availableLawyers = lawyersArray.sort((p1, p2) => p1.id - p2.id);
            setLawyerDetail(availableLawyers);
        })
        .catch((error) => {
            console.log('Error in fetching Lawyer', error);
        });
    }, []);

    const [showExpertise, setShowExpertise] = useState(true);
    const [showReview, setShowReview] = useState(false);
    const [isActive, setActive] = useState('expertise');


    const showReviewSection = () => {
        setShowExpertise(false)
        setShowReview(true)
        setActive('review')
    }

    const showExpertiseSection = () => {
        setShowExpertise(true)
        setShowReview(false)
        setActive('expertise')
    }

  return (
    <IonPage>
        <IonToolbar>
            <div className='icon-container'>
                <IonIcon icon={chevronBack}  onClick={previousPage}></IonIcon>
            </div>
            <IonTitle>
                Lawyer Details
            </IonTitle>
        </IonToolbar>
        <IonContent>
            <div className='lawyers_details_container'>
                <div className='lawyer-details-overview'>
                    <div className='lawyer-details-image'>
                        <img src={LawyerDetailsImage} />
                    </div>

                    <div className='lawyer-details-writeup'>
                        <h2>Rako Christian</h2>
                        <p>Location - Nigeria</p>
                        <p>Experience - 12 years</p>
                    </div>
                </div>

                <div className='expertise-and-review-header'>
                    <h3 onClick={showExpertiseSection}
                    className={isActive === 'expertise' ? 'active' : ''}
                    >Expertise</h3>
                    <h3 onClick={showReviewSection}
                    className={isActive === 'review' ? 'active' : ''}
                    >Review</h3>
                </div>
                <hr className='expertise-line'/>
                {showExpertise ? (
                    <div className='lawyers-expertise'>
                        <div className='listed-expertise'>
                            <h5>Insurance</h5>
                            <h5>Arbitration</h5>
                            <h5>Recovery</h5>

                            <h5>Insurance</h5>
                            <h5>Arbitration</h5>
                            <h5>Recovery</h5>
                        </div>

                        <div className='chat-button'>
                            <IonIcon icon={chatbubblesOutline}></IonIcon>
                            <h2>Chat</h2>
                        </div>
                    </div>
                ): null }

                {showReview ? (
                <div className='lawyers-review'>
                    <div className='review-image'>
                        <img src={Shanti} />
                    </div>

                    <div className='review-writeup'>
                        <h3>Shanti K M</h3>
                        <p>
                            "I hired this lawyer to help me
                            with a personal injury case and I
                            was impressed with their expertise...
                        </p>
                    </div>
                </div>
                ): null }
            </div>
        </IonContent>
    </IonPage>
  )
}

export default LawyerDetails