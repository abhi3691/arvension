import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomScreen from '../screens/HomScreen';
import MyDrawer from './DrawerNavigation';
const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomScreen} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default MyStack;
