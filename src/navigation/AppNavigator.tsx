import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginForm from '../screens/Login';
import SignUpForm from '../screens/SignUp';
import Home from '../screens/Home';
import AssetDetails from '../screens/AssetDetails';
import Trade from '../screens/Trade';
import Portfolio from '../screens/Portfolio';

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
        <Stack.Screen options={{ headerTitle: '' }} name="Login" component={LoginForm} />
        <Stack.Screen options={{ headerTitle: '' }} name="SignUp" component={SignUpForm} />
        <Stack.Screen options={{ headerTitle: '' }} name="HomeTabs" component={HomeTabs} />
        <Stack.Screen options={{ headerTitle: '' }} name="AssetDetails" component={AssetDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;