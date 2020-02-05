import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);

export default Routes;
