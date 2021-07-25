import React from 'react';
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { useNavigation } from '@react-navigation/native';

import PlayScreen from './Play';
// 😀 ⏳ ⏳ 🧳 ⏱️ ⏲️ 🦺 📱 📔 🪔 📕 📖 📗 📘 📙 📚 📓 📒 📃 📜 📄 📰 🗞️ 📑 🔖 🏷️ 💰 📝 💼 🗄️ 🚿

const windowWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

function PlayStack() {
  return (
    <Stack.Navigator
        initialRouteName="Play"
        screenOptions={{
          headerShown: true
        }}>
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ title: 'Play Page' }}/>
      </Stack.Navigator>
  );
}

const Card = (props) => {

  const navigation = useNavigation();


  return (
    <View style={styles.item}>
      
      <View style={styles.itemLeft}>
        <Text style={styles.square}>{props.emoji}</Text>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.rightSide}>
      <Text style={styles.textTime}>{props.focus} min</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Play', { taskName: props.text, emoji: props.emoji, focus: props.focus, shortBreak: props.shortBreak,
           longBreak: props.longBreak, longInterval: props.longBreakInterval})}>
          <Image source={require("./assets/playButton.png")} />   
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#2d2c3f',
    padding: 15,
    borderRadius: 10,
    alignSelf: "stretch",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    //width: 24,
    //height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: windowWidth / 2.5,
    color: "white",
    fontFamily: "Futura"
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  textTime: {
      textAlign:"right",
      color: "white",
      paddingRight: 10,
      fontFamily: "Menlo"
  },
  rightSide: {
      flexDirection: "row",
      alignItems: "center",
  }
});

export default Card;