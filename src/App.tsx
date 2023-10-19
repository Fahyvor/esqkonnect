import './index.css'
import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
  homeOutline,
  mailOutline,
  personCircleOutline,
  searchOutline
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Splash from './pages/Splash';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import LawyersSignUp from './pages/LawyersSignUp';
import ForgotPassword from './pages/ForgotPassword';
import Otp from './pages/Otp';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Security from './pages/Security';
import Notification from './pages/Notification';
import Availability from './pages/Availability';
import AboutUs from './pages/AboutUs';
import Decision from './pages/Decision';
import UsersSignUp from './pages/UsersSignUp';
import Home from './pages/Home';
import Search from './pages/Search';
// import Tab from './components/Tab';

setupIonicReact();

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Splash />
          </Route>

          <Route exact path="/welcome">
            <Welcome />
          </Route>

          <Route exact path="/decision">
            <Decision />
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>

          <Route exact path="/lawyers-signup">
            <LawyersSignUp />
          </Route>

          <Route exact path="/users-signup">
            <UsersSignUp />
          </Route>

          <Route exact path="/forget-password">
            <ForgotPassword />
          </Route>

          <Route exact path="/otp">
            <Otp />
          </Route>

          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/security">
            <Security />
          </Route>

          <Route exact path="/notification">
            <Notification />
          </Route>

          <Route exact path="/availability">
            <Availability />
          </Route>

          <Route exact path="/about-us">
            <AboutUs />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
              <IonTabButton tab="/" href="/"
              className={activeTab === '/' ? 'active' : ''}
              onClick={() => setActiveTab('/')}
              >
                  <IonIcon icon={homeOutline} />
                  <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="/search" href="/search"
              className={activeTab === '/search' ? 'active' : ''}
              onClick={() => setActiveTab('/search')}>
                  <IonIcon icon={searchOutline} />
                  <IonLabel>Search</IonLabel>
              </IonTabButton>

              <IonTabButton tab="/messages" href="/messages"
              className={activeTab === '/messages' ? 'active' : ''}
              onClick={() => setActiveTab('/messages')}>
                  <IonIcon icon={mailOutline} />
                  <IonLabel>Messages</IonLabel>
              </IonTabButton>

              <IonTabButton tab="/profile" href="/profile"
              className={activeTab === '/profile' ? 'active' : ''}
              onClick={() => setActiveTab('/profile')}>
                  <IonIcon icon={personCircleOutline} />
                  <IonLabel>Profile</IonLabel>
              </IonTabButton>
        </IonTabBar>
        {/* <Tab /> */}
      </IonTabs>
    </IonReactRouter>
   
        
  </IonApp>
  );
};

export default App;

// import './index.css'
// import { Redirect, Route } from 'react-router-dom';
// import {
//   IonApp,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
//   IonTabBar,
//   IonTabButton,
//   IonTabs,
//   setupIonicReact
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
// import './theme/variables.css';
// import Splash from './pages/Splash';

// setupIonicReact();

// const App: React.FC = () => (
//   <IonApp>
//  <IonReactRouter>
//    <IonTabs>
//      <IonRouterOutlet>
//        <Route exact path="/">
//          <Splash />
//        </Route>
//        <Route exact path="/tab1">
//          <Tab1 />
//        </Route>
//        <Route exact path="/tab2">
//          <Tab2 />
//        </Route>
//        <Route path="/tab3">
//          <Tab3 />
//        </Route>
//        <Route exact path="/">
//          <Redirect to="/tab1" />
//        </Route>
//      </IonRouterOutlet>
//      <IonTabBar slot="bottom">
//        <IonTabButton tab="tab1" href="/tab1">
//          <IonIcon aria-hidden="true" icon={triangle} />
//          <IonLabel>Tab 1</IonLabel>
//        </IonTabButton>
//        <IonTabButton tab="tab2" href="/tab2">
//          <IonIcon aria-hidden="true" icon={ellipse} />
//          <IonLabel>Tab 2</IonLabel>
//        </IonTabButton>
//        <IonTabButton tab="tab3" href="/tab3">
//          <IonIcon aria-hidden="true" icon={square} />
//          <IonLabel>Tab 3</IonLabel>
//        </IonTabButton>
//      </IonTabBar>
//    </IonTabs>
//  </IonReactRouter>
//   </IonApp>
// );

// export default App;
