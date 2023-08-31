import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'; // Import your HomeScreen component
import ProfileScreen from './src/screens/ProfileScreen'; // Import your ProfileScreen component
import CommentScreen from './src/screens/commentScreen';
import {FontAwesome5} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen key="HomeTab"
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="wodu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CommentScreen" // Make sure the name matches the one you're using in navigation.navigate()
        component={CommentScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
