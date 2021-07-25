import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, TouchableHighlight, TouchableOpacity, StatusBar} from "react-native";
import { Divider } from "react-native-paper";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { useState, useEffect } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const getShortRemaining = (time) => {
    const Shortmins = Math.floor(time / 60);
    const Shortsecs = time - Shortmins * 60;
    return { Shortmins: formatNumber(Shortmins), Shortsecs: formatNumber(Shortsecs) };
}

const getLongRemaining = (time) => {
    const Longmins = Math.floor(time / 60);
    const Longsecs = time - Longmins * 60;
    return { Longmins: formatNumber(Longmins), Longsecs: formatNumber(Longsecs) };
}

const simpleEndTask = () => {
    //function to make simple alert
    alert("Congrats! You have finished the task. Press 'reset' and 'start' to replay");
  };

const PlayScreen = ({ route }) => {
    //Focus
    const focusTimeMin = route.params.focus;
    const [remainingSecs, setRemainingSecs] = useState(focusTimeMin*60);
    const { mins, secs } = getRemaining(remainingSecs);
    //Short break
    const shortBreakTimeMin = route.params.shortBreak;
    const [remainingShortSecs, setShortRemainingSecs] = useState(shortBreakTimeMin*60);
    const { Shortmins, Shortsecs } = getShortRemaining(remainingShortSecs);
    //Long Break
    const longBreakTimeMin = route.params.longBreak;
    const [remainingLongSecs, setLongRemainingSecs] = useState(longBreakTimeMin*60); 
    const { Longmins, Longsecs } = getLongRemaining(remainingLongSecs);
    //Button toggle
    const [isCountdown, setIsCountdown] = useState(false);
    const [isShortCountdown, setIsShortCountdown] = useState(false);
    const [isLongCountdown, setIsLongCountdown] = useState(false);

    const toggle = () => {
        //if countdown not same time as original
        if(remainingSecs == focusTimeMin)
        {
            setIsCountdown(!isCountdown);
        } else if (remainingShortSecs == shortBreakTimeMin) {
            setIsShortCountdown(!isCountdown);
        } else if (remainingLongSecs == longBreakTimeMin) {
            setIsLongCountdown(!isCountdown);
        }
    }

    const reset = () => {
        setRemainingSecs(focusTimeMin*60);
        setShortRemainingSecs(shortBreakTimeMin*60);
        setLongRemainingSecs(longBreakTimeMin*60);

        setIsCountdown(false);
        setIsShortCountdown(false);
        setIsLongCountdown(false);

        setCounter(1);
    }

    useEffect(() => {
        let interval = null;
        if (isCountdown) {
          interval = setInterval(() => {
            if(remainingSecs != 0)
            {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }
            else {
                setIsShortCountdown(true);
                setIsCountdown(false);
                setRemainingSecs(focusTimeMin);
                clearInterval(interval);
            }    
          }, 1000);
        } else if (remainingSecs == 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isCountdown, remainingSecs]);

      useEffect(() => {
        let interval = null;
        if (isShortCountdown) {
          interval = setInterval(() => {
            if(remainingShortSecs != 0)
            {
                setShortRemainingSecs(remainingShortSecs => remainingShortSecs - 1);
            }
            else {
                setIsLongCountdown(true);
                setIsShortCountdown(false);
                setShortRemainingSecs(shortBreakTimeMin);
                clearInterval(interval);
            }    
          }, 1000);
        } else if (remainingShortSecs == 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isShortCountdown, remainingShortSecs]);

      useEffect(() => {
        let interval = null;
        if (isLongCountdown) {
          interval = setInterval(() => {
            if((counter == longInterval) && (remainingLongSecs != 0))
            {
                setLongRemainingSecs(remainingLongSecs => remainingLongSecs - 1);
            }
            else {
                console.log("else counter 1: " + counter);
                if((counter+1) <= longInterval)
                {
                    setCounter(counter + 1);
                }
                if(counter == longInterval)
                {
                    console.log("got in alert");
                    simpleEndTask();
                }
                setLongRemainingSecs(longBreakTimeMin);

                setIsLongCountdown(false);
                if(counter < longInterval)
                {
                    setIsCountdown(true);
                }
                console.log("else counter 2: " + counter);
                clearInterval(interval);
            }    
          }, 1000);
        } else if (remainingLongSecs == 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isLongCountdown, remainingLongSecs]);


    //Intervals
    const [counter, setCounter] = useState(1);
    const longInterval = route.params.longInterval;

    return (
        <View style={styles.viewStyles}>
            <View style={styles.item}>
                <Text style={{ color: "white", fontFamily: "Futura", textAlign: "center", fontSize: 20}}>{route.params.emoji} {route.params.taskName} </Text>
            </View>

            <View style={{ flexDirection: "row", paddingLeft: 50, paddingRight: 50, justifyContent: "space-between"}}>
                <View style={styles.itemBox}>
                    <Text style={{ color: "white", fontSize: 30}}>{`${mins}:${secs}`}</Text>
                </View>

                <View style={{ paddingRight: 25}}></View>

                <View style={styles.itemBox}>
                    <Text style={{ color: "white", fontSize: 30}}>{`${Shortmins}:${Shortsecs}`}</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", paddingLeft: 50, paddingRight: 50, justifyContent: "space-between"}}>
                <View style={styles.itemBox}>
                    <Text style={{ color: "white", fontSize: 30}}>{`${Longmins}:${Longsecs}`}</Text>
                </View>

                <View style={{ paddingRight: 25}}></View>

                <View style={styles.itemBox}>
                    <View style={{ flexDirection: "column"}}>
                    <Text style={{color: "white"}}>Long Break Interval</Text>
                    <Text style={{ color: "white", fontSize: 30}}>{`${counter} out ${longInterval} `}</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: "stretch", justifyContent: "center"}}>
            <TouchableOpacity style={styles.playButton} onPress={toggle}>
                <Text style={styles.textTitle}>Start</Text>
            </TouchableOpacity>
            <Divider style={{ paddingTop: 30}}></Divider>
            <TouchableOpacity style={styles.resetButton} onPress={reset}>
                <Text style={styles.textTitle}>Reset</Text>
            </TouchableOpacity>
            
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontFamily: "Futura",
        fontSize: 35,
        textAlign: "center",
        color: "white",
      },
      viewStyles: {
          alignItems: "center",
          paddingTop: 80,
          backgroundColor: "#1e1b2e",
          height: windowHeight,
          padding: 10,
          textAlign: "center",
      },
      item: {
        backgroundColor: '#2d2c3f',
        padding: 20,
        borderRadius: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        flexDirection: 'row',
        marginBottom: 20,
        fontFamily: "Futura",
      },
      itemBox: {
        backgroundColor: '#2d2c3f',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        fontFamily: "Futura",
        alignSelf: "stretch",
        textAlign: "center",
        width: windowWidth / 2.3,
        height: windowHeight /5,
      },
      playButton: {
          backgroundColor: "#674fff",
          alignSelf: "stretch",
          justifyContent: "center",
          borderRadius: 10,
          textAlign: "center"
      },
      resetButton: {
        backgroundColor: "#6b4ca6",
        alignSelf: "stretch",
        justifyContent: "center",
        borderRadius: 10,
        textAlign: "center"
    }
});

export default PlayScreen;