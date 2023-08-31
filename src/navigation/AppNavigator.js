import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Import your HomeScreen component
import CommentScreen from '../screens/CommentScreen'; // Import your CommentScreen component
import BottomTabs from '../screens/BottomTabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}} // Hide the header for the HomeScreen
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{title: 'Comment'}} // Set a title for the CommentScreen header
      />
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="HomeStack" component={HomeStack} />
    //   <Tab.Screen name="Dashboard" component={DashboardScreen} />
    // </Tab.Navigator>
  );
};

export default AppNavigator;
