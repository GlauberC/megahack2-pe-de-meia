import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../../pages/HomePage';
import Achievements from '../../pages/Achievements';

import {colors} from '../../styles/mainStyles';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: colors.barContainer},
        activeTintColor: colors.barActive,
        inactiveTintColor: colors.barInactive,
      }}>
      <Tab.Screen name="Home" component={HomePage} options={{title: 'Home'}} />
      <Tab.Screen
        name="Settings"
        component={Achievements}
        options={{title: 'Conquistas'}}
      />
    </Tab.Navigator>
  );
}
