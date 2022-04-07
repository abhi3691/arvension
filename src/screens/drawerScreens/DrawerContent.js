import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DrawerContent() {
  return (
    <View style={styles.container}>
      <View style={styles.BoxBorder}></View>
      <View style={styles.Box}>
        <Text style={styles.BoxText}>Family</Text>
      </View>
      <View style={styles.Box}>
        <Text style={styles.BoxText}>Devices</Text>
      </View>
      <View style={styles.Box}>
        <Text style={styles.BoxText}>Scenes</Text>
      </View>
      <View style={styles.Box}>
        <Text style={styles.BoxText}>Settings</Text>
      </View>
      <View style={styles.BoxBorder}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82736C',
    elevation: 20,
  },
  BoxBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxText: {
    color: '#fff',
    fontSize: 20,
  },
});
