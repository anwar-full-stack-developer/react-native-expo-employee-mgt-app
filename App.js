// In App.js in a new project
import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import EmployeeListScreen from './screens/EmployeeListScreen';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="EmployeeList" component={EmployeeListScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="CreatePost" component={CreatePostScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      /> */}
        <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ title: 'EMPLOYEE MGT APP' }}
      />
      
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        {/* <Stack.Screen name="CreatePost" component={CreatePostScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
