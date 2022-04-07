import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Family from '../screens/drawerScreens/Family';
import Devices from '../screens/drawerScreens/Devices';
import Scenes from '../screens/drawerScreens/Scenes';
import Settings from '../screens/drawerScreens/Settings';
import DrawerContent from '../screens/drawerScreens/DrawerContent';
const drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: 'transparent'},
      }}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Family">
      <drawer.Screen name="Family" component={Family} />
      <drawer.Screen name="Devices" component={Devices} />
      <drawer.Screen name="Scenes" component={Scenes} />
      <drawer.Screen name="Settings" component={Settings} />
    </drawer.Navigator>
  );
};

export default MyDrawer;
