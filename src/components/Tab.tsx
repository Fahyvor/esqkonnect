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
import { square } from 'ionicons/icons';



type Props = {}

const Tab = (props: Props) => {
  return (
    <IonTabs>
        <IonRouterOutlet>
            <IonTabBar slot="bottom">
                    <IonTabButton tab="/" href="/">
                        <IonIcon icon={square} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="/" href="/">
                        <IonIcon icon={square} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="/messages" href="/">
                        <IonIcon icon={square} />
                        <IonLabel>Messages</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="/profile" href="/">
                        <IonIcon icon={square} />
                        <IonLabel>Profile</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonRouterOutlet>
        </IonTabs>
  )
}

export default Tab