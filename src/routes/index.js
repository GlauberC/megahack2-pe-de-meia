import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ProfileQuestions from '../pages/ProfileQuestions';
import ResultProfile from '../pages/ResultProfile';
import TabRoutes from './TabRoutes';

import {headerOptions} from './headerOptions';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileQuestions"
          component={ProfileQuestions}
          options={headerOptions}
        />
        <Stack.Screen
          name="ResultProfile"
          component={ResultProfile}
          options={headerOptions}
        />
        <Stack.Screen
          name="Home"
          component={TabRoutes}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
