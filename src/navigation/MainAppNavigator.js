import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components/TabBar'

const Tab = createBottomTabNavigator();

export default function MainAppNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={TabBar}>
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Home', img: require('../assets/res/home.png') }}
      />
      <Tab.Screen
        name="SubScreen"
        options={{ title: 'Sub', img: require('../assets/res/menu-icon.jpg') }}
      />
    </Tab.Navigator>
  );
}
