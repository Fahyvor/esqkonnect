import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTab, IonTabs, IonTabButton, IonTitle, IonToolbar, IonRouterOutlet } from "@ionic/react"
import './profile.css'
import { chevronForward, square } from "ionicons/icons"
import Upload from '../assets/upload.png'
// import Tab from "../components/Tab"

const Profile:React.FC = () => {

    const handleLogout = () => {
        // console.log('Hello World')
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
                        <h4>marley.botosh@gmail.com</h4>
                        <h3>Bankole Johnson</h3>
                    </div>
                </div>

                <div className="personal-details">
                    <h2>Personal details</h2>

                    <div className="full-details">
                        <div className="profile-cards">
                            <div className="cards-left">
                                <h3>Account</h3>
                                <p>Manage your name, email and password.</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>
                        <hr />

                        <div className="profile-cards">
                            <div className="cards-left">
                                <h3>Security</h3>
                                <p>Manage your password here</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <div className="profile-cards">
                            <div className="cards-left">
                                <h3>Notifications</h3>
                                <p>View your notifications here</p>
                            </div>

                            <div className="card-right">
                                <IonIcon icon={chevronForward}></IonIcon>
                            </div>
                        </div>

                        <div className="profile-cards">
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
                        <div className="more-cards">
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