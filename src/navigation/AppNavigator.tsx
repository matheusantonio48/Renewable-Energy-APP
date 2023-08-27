import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginForm from '../components/screens/Login';
import SignUpForm from '../components/screens/SignUp';
import Home from '../components/screens/Home';
import AssetDetails from '../components/screens/AssetDetails';
import Trade from '../components/screens/Trade';
import Portfolio from '../components/screens/Portfolio';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="AssetDetails" component={AssetDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;