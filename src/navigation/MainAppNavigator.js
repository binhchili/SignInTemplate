import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import SubScreen from '../screens/SubScreen';
import Container from '../screens/Container';

const Tab = createBottomTabNavigator();

export default function MainAppNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={TabBar}>
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Home', img: require('../assets/res/home.png') }}
      >
        {() => (
          <Container>
            <HomeScreen />
          </Container>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="SubScreen"
        options={{ title: 'Sub', img: require('../assets/res/menu-icon.jpg') }}

      >
        {() => (
          <Container>
            <SubScreen />
          </Container>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
