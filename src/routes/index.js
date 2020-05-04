import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ProfileQuestions from '../pages/ProfileQuestions';

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
          // options={}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
