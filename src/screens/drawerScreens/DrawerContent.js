import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
export default function DrawerContent() {
  return (
    <View style={styles.container}>
      <View style={styles.BoxBorder}></View>
      <TouchableHighlight
        style={styles.Box}
        onPress={() => {}}
        underlayColor="transparent">
        <View flexDirection="row">
          <MaterialIcons
            name="home"
            size={35}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.BoxText}>Family</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Box}
        onPress={() => {}}
        underlayColor="transparent">
        <View flexDirection="row">
          <Feather name="airplay" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.BoxText}>Devices</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Box}
        onPress={() => {}}
        underlayColor="transparent">
        <View flexDirection="row">
          <Feather name="clock" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.BoxText}>Scenes</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.Box}
        onPress={() => {}}
        underlayColor="transparent">
        <View flexDirection="row">
          <Feather name="settings" size={30} color="#fff" style={styles.icon} />
          <Text style={styles.BoxText}>Settings</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.BoxBorder}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#82736C',
    elevation: 10,
    borderTopRightRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
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
    flexDirection: 'row',
  },
  BoxText: {
    color: '#fff',
    fontSize: 20,
  },
  icon: {
    paddingRight: 20,
  },
});
