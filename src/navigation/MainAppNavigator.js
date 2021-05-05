import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import SubScreen from '../screens/SubScreen';

const Tab = createBottomTabNavigator();

export default function MainAppNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={TabBar}>
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Home', img: require('../assets/res/home.png') }}
        component={HomeScreen}
      >
      </Tab.Screen>
      <Tab.Screen
        name="SubScreen"
        options={{ title: 'Sub', img: require('../assets/res/menu-icon.jpg') }}
        component={SubScreen}
      >

      </Tab.Screen>
    </Tab.Navigator>
  );
}
