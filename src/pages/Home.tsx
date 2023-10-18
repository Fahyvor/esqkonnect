import React from 'react'
import { IonContent, IonIcon, IonPage, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import User from '../assets/user.png'
import Categories from '../assets/categories.png'
import Lawyer1 from '../assets/lawyer1.png'
import Lawyer2 from '../assets/lawyer2.png'
import Service1 from '../assets/services1.png'
import Service2 from '../assets/services2.png'
import Service3 from '../assets/services3.png'
import Service4 from '../assets/services4.png'
import './home.css'



const Home:React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <div className='home-container'>
                <div className='home-header'>
                    <div className='home-left'>
                        <h3>Welcome Back</h3>
                        <h1>Olamide</h1>
                    </div>

                    <div className='home-right'>
                        <img src={User} alt='' />
                    </div>
                </div>

                <div className='home-content'>
                    <div className='lawyers-categories'>
                        <div className='categories-container'>
                            <img src={Categories} />
                        </div>
                        
                        <div className='categories-container'>
                            <p>Divorce Laywers</p>
                        </div>

                        <div className='categories-container'>
                            <p>Family Laywers</p>
                        </div>

                        <div className='categories-container'>
                            <p>Criminal Laywers</p>
                        </div>

                        <div className='categories-container'>
                            <p>Tax Laywers</p>
                        </div>
                    </div>

                    <div className='top-lawyers-container'>
                        <div className='top-lawyers-header'>
                            <h1>Top Lawyers</h1>
                            <h6>View all</h6>
                        </div>

                        <div className='top-lawyers'>
                            <div className='lawyers-containers'>
                                <div className='lawyers-image'>
                                    <img src={Lawyer1} />
                                </div>

                                <div className='lawyers-details'>
                                    <h6>Rako</h6>
                                    <p>Family Lawyer</p>
                                    <p>Tax Lawyer</p>
                                </div>
                            </div>

                            <div className='lawyers-containers'>
                                <div className='lawyers-image'>
                                    <img src={Lawyer2} />
                                </div>

                                <div className='lawyers-details'>
                                    <h6>Surendra</h6>
                                    <p>Criminal Lawyer</p>
                                    <p>Tax Lawyer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='services-container'>
                        <div className='services-header'>
                            <h1>Our Services</h1>
                        </div>

                        <div className='services-offered'>
                            <div className='service-offered'>
                                <div className='service-image'>
                                    <img src={Service1} />
                                </div>

                                <h2>Legal Coaching</h2>
                            </div>

                            <div className='service-offered'>
                                <div className='service-image'>
                                    <img src={Service2} />
                                </div>

                                <h2>Document Review</h2>
                            </div>

                            <div className='service-offered'>
                                <div className='service-image'>
                                    <img src={Service3} />
                                </div>

                                <h2>Legal Coaching</h2>
                            </div>

                            <div className='service-offered'>
                                <div className='service-image'>
                                    <img src={Service4} />
                                </div>

                                <h2>Document Review</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IonContent>
    </IonPage>
  )
}

export default Home