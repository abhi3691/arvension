import React from 'react';
import {View, SafeAreaView} from 'react-native';
import HomScreen from './src/HomScreen';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomScreen />
    </SafeAreaView>
  );
}
