import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile196596Navigator from '../features/UserProfile196596/navigator';
import Tutorial196595Navigator from '../features/Tutorial196595/navigator';
import NotificationList196567Navigator from '../features/NotificationList196567/navigator';
import Settings196566Navigator from '../features/Settings196566/navigator';
import Settings196558Navigator from '../features/Settings196558/navigator';
import UserProfile196556Navigator from '../features/UserProfile196556/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile196596: { screen: UserProfile196596Navigator },
Tutorial196595: { screen: Tutorial196595Navigator },
NotificationList196567: { screen: NotificationList196567Navigator },
Settings196566: { screen: Settings196566Navigator },
Settings196558: { screen: Settings196558Navigator },
UserProfile196556: { screen: UserProfile196556Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
