import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabs, IonTabButton, IonTitle, IonToolbar, IonRouterOutlet } from "@ionic/react"
import './profile.css'
import { chevronForward, square } from "ionicons/icons"
import Upload from '../assets/upload.png'
import axios from "axios"
import { API_URL } from "../apiConfig"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setUserData, clearUserData } from "../redux/userSlice"
import { useHistory } from "react-router"

const Profile:React.FC = () => {

    const userData = useSelector(setUserData);

    const history = useHistory();
    const dispatch = useDispatch();

    const first_name  = userData.payload.user.data.user.first_name
    const last_name  = userData.payload.user.data.user.last_name
    const email  = userData.payload.user.data.user.email
    const token = userData.payload.user.data.token
    const user = userData.payload.user.data.user

    const handleLogout = async () => {
        console.log('Hello World')

        const data = {
            user: user,
            token: token
        }

        try {
            console.log(token);
            const userLogout = await axios.post(`${API_URL}/logout`, data, {
                headers: {
                    Accept: 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch(clearUserData());
            history.push('/decision')
        } catch (error) {
            console.log('Error in Logging Out', error);
            console.log('User Not logged Out', error.message)
        }
    }

    // const user = {
    //     first_name: userData ? userData.first_name : '',
    //     last_name: userData ? userData.last_name : '',
    // };

    // useEffect(() => {
    //     axios.get(`${API_URL}/profile`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     })
    //         .then((response) => {
    //             console.log('API Response data', response.data);
    //             const userData = response.data;
    //             setUser({
    //                 first_name: userData.user.first_name,
    //                 last_name: userData.last_name,
    //                 email: userData.email,
    //             });
    //         })
    //         .catch((error) => {
    //             console.log('Error fetching data', error);
    //             console.log('Error message', error.message);
    //         });
    // }, []);

    const defaultDetails = "User"

    const goToAbout = () => {
        history.push('/about-us')
    }

    const goToAccount = () => {
        history.push('/account')
    }

    const goToSecurity = () => {
        history.push('/security')
    }

    const goToNotifications = () => {
        history.push('/notification')
    }

    const goToAvailability = () => {
        history.push('/availability')
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div className="profile-container">
                <div className="profile-image-name">
                    <div className="profile-image">
                        .
                    </div>
                    <div className="profile-image-main">
                        <img src={Upload} />
                    </div>

                    <div className="profile-name">
                        <h4>{email ? email : defaultDetails}</h4>
                        <h3>{first_name ? first_name : defaultDetails} { last_name ? last_name : defaultDetails}</h3>
                    </div>
                </div>

                <div className="personal-details">
                    <h2>Personal details</h2>

                    <div className="full-details">
                        <div className="profile-cards" onClick={goToAccount}>
                            <div className="cards-left">
                                <h3>Account</h3>
                                <p>Manage your name, email and password.</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>
                        <hr />

                        <div className="profile-cards" onClick={goToSecurity}>
                            <div className="cards-left">
                                <h3>Security</h3>
                                <p>Manage your password here</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <div className="profile-cards" onClick={goToNotifications}>
                            <div className="cards-left">
                                <h3>Notifications</h3>
                                <p>View your notifications here</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <div className="profile-cards" onClick={goToAvailability}>
                            <div className="cards-left">
                                <h3>Availability</h3>
                                <p>Set your availability status here</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="more">
                    <h2>More</h2>

                    <div className="more-containers">
                        <div className="more-cards" onClick={goToAbout}>
                            <div className="more-cards-left">
                                <h4>About us</h4>
                            </div>

                            <div className="more-card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <div className="more-cards" onClick={handleLogout}>
                            <div className="more-cards-left">
                                <h4>Logout</h4>
                            </div>

                            <div className="more-card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <hr />

                        <div className="more-cards-logout">
                            <div className="more-cards-left">
                                <h4>Delete Account</h4>
                            </div>

                            <div className="more-card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>

        {/* <Tab /> */}
    </IonPage>
  )
}

export default Profile