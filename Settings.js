import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, TouchableHighlight, TouchableOpacity, StatusBar} from "react-native";
import { Divider } from "react-native-paper";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.scrollViewInspect}>
      <View style={styles.body}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.settingsContent}>
        <Text style={{ color: "white" }}>ABOUT</Text>
          <View style={{ borderBottomColor: "white", borderBottomWidth: 1.5, padding: 5, width: windowWidth / 8 }} />
            <Text></Text>
            <View style={styles.borderCard}>
                <Text style={{ color: "white" }}>VERSION 1.0.0</Text>
                <View style={{ borderBottomColor: "white", backgroundColor: "#2d2c3f", borderBottomWidth: 1.5, padding: 5, width: windowWidth / 1.4, opacity: 0.3 }} />
                <Text style={{ color: "white", paddingTop: 10 }}>PRIVACY AND TERMS</Text>
                <View style={{ borderBottomColor: "white", backgroundColor: "#2d2c3f", borderBottomWidth: 1.5, padding: 5, width: windowWidth / 1.4, opacity: 0.3 }} />
                <Text style={{ color: "white", paddingTop: 10 }}>RATE ⭐⭐⭐⭐⭐</Text>
            </View>

            <Text style={{ color: "white" }}>INFO</Text>
          <View style={{ borderBottomColor: "white", borderBottomWidth: 1.5, padding: 5, width: windowWidth / 12 }} />
            <Text></Text>
            <View style={styles.borderCard}>
                <Text style={{ color: "white", fontFamily: "Futura" }}>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia</Text>
            </View>
            <Text style={{ color: "white" }}>How it works?</Text>
          <View style={{ borderBottomColor: "white", borderBottomWidth: 1.5, padding: 5, width: windowWidth / 4.5 }} />
          <Text></Text>
          <View style={styles.borderCard}>
                <Text style={{ color: "white", fontFamily: "Futura" }}> 1. Click add "+" button on HomeScreen {'\n'} 2.Fill out form {'\n'} 3. After select "play" button on Home Screen {'\n'} 4. That will begin process of the task time and short break until it reaches desired interval. Where then it will procced to the long break and finish the task</Text>
            </View>
          </View>
          
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Futura",
    fontSize: 35,
    color: "white",
  },
  body: {
    flex: 1,
    alignContent: "space-between",
    backgroundColor: "#1e1b2e",
    alignItems: "stretch",
    //justifyContent: "space-around",
    padding: 30,
    paddingTop: 60,
  },
  scrollViewInspect: {
    backgroundColor: "#1e1b2e",
  },
  settingsContent: {
    justifyContent: "space-evenly",
    padding: 10,
  },
  borderCard: {
    backgroundColor: '#2d2c3f',
    padding: 15,
    borderRadius: 10,
    alignSelf: "stretch",
    flexDirection: 'column',
    alignItems: "baseline",
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 20
  }
});

export default SettingsScreen;
