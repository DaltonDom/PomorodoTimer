import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import SettingsScreen from "./Settings";
import PlayScreen from './Play';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings Page' }} />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ title: 'Play Page' }} />
          
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}/>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}/>
      </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#eef1f8"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
      barStyle={{ backgroundColor: '#4747B1' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          fontFamily: "Futura",
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          fontFamily: "Futura",
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
