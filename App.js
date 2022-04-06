import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
