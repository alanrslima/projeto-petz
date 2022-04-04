import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useSelector} from 'react-redux';
// import {navigationRef} from '~/config/RootNavigation';

import Login from './login.routes';
import Dashboard from './dashboard';
// import {StoreStateProps} from '~/store/createStore';

const RootStack = createNativeStackNavigator();
function Routes() {
  // const {user} = useSelector((state: StoreStateProps) => state.Authentication);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{headerShown: false}}
          name="App"
          component={Dashboard}
        />
        {/* {user ? (
          <RootStack.Screen
            options={{headerShown: false}}
            name="App"
            component={Dashboard}
          />
        ) : (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
        )} */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
