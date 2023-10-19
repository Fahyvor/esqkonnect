import { useState } from 'react';
import { IonContent, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { chatbubblesOutline, chevronBack } from 'ionicons/icons';
import './lawyersdetails.css'
import LawyerDetailsImage from '../assets/lawyerDetailsImage.png'
import Shanti from '../assets/shanti.png'

const LawyerDetails = () => {

    const history = useHistory();

    const previousPage = () => {
        history.goBack();
    }

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