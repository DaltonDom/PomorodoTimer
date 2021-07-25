import * as React from "react";
import { useState } from "react";
import { Dimensions, FlatList, TextInput } from "react-native";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Button } from "react-native";

import Card from "./Card";

const HomeScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [modalPlayOpen, setModalPlayOpen] = useState(false);

  const [isToggled, setIsToggled] = useState(false);
  const isOpenClose = () => {
      setIsToggled(!isToggled);
  }

  const [selectedEmoji, setSelectedEmoji] = useState("😀");
  const isEmoji = () => {
      setSelectedEmoji(selectedEmoji);
  }

  //LONG BREAK
  const [countFocus, setFocus] = useState(25);
  const IncremenetFocusCounter = () => {
    if (((countFocus+1) <= 25) && (countFocus >= 0)) {
      setFocus(countFocus + 1);
    }
  };
  const DecrementFocusCounter = () => {
    if ((countFocus <= 25) && ((countFocus-2) >= 0)) {
      setFocus(countFocus - 1);
    }
  };
  //SHORT BREAK
  const [countShortBreak, setShortBreak] = useState(5);
  const IncremenetCountShortCounter = () => {
    if (((countShortBreak+1) <= 5) && (countShortBreak >= 0)) {
      setShortBreak(countShortBreak + 1);
    }
  };
  const DecrementCountShortCounter = () => {
    if ((countShortBreak <= 5) && ((countShortBreak-2) >= 0)) {
      setShortBreak(countShortBreak - 1);
    }
  };
  //LONG BREAK
  const [countLongBreak, setLongBreak] = useState(15);
  const IncremenetCountLong = () => {
    if (((countLongBreak+1) <= 15) && countLongBreak >= 0) {
      setLongBreak(countLongBreak + 1);
    }
  };
  const DecrementCountLong = () => {
    if ((countLongBreak <= 15) && ((countLongBreak-2) >= 0)) {
      setLongBreak(countLongBreak - 1);
    }
  };
  //FOCUS SESSION
  const [countLongInterval, setLongInterval] = useState(5);
  const IncremenetCountInterval = () => {
    if (((countLongInterval+1) <= 10) && countLongInterval >= 0) {
        setLongInterval(countLongInterval + 1);
    }
  };
  const DecrementCountInterval = () => {
    if ((countLongInterval <= 10) && ((countLongInterval-2) >= 0)) {
        setLongInterval(countLongInterval - 1);
    }
  };
  const windowWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => setSelectedEmoji(item) + isOpenClose(false)}>
        <Text style={{ padding: 10, fontSize: 25}}>{item}</Text>
      </TouchableOpacity>
  );

  const [dataForCards, setCardData] = useState(cardData);

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => removeItem(item.id)}>
      <Card style={styles.items} text={item.taskName} focus={item.focusTime} shortBreak={item.shortBreakTime} longBreak={item.longBreakTime} longBreakInterval={item.longBreakInterval} emoji={item.emoji} modalPlay={modalPlayOpen} setPlay={setModalPlayOpen} onPress={() => removeItem(item.id)} /> 
    </TouchableOpacity>
  );

 
  //remote cards
  const removeItem = (id) => {
    let arr = dataForCards.filter(function(item) {
      return item.id !== id
    })
    setCardData(arr);
  };

  return (
    <ScrollView style={{ backgroundColor: "#1e1b2e" }}>
      <Modal style={styles.modalStyle} visible={modalOpen}>
        <View style={styles.modalContent}>
          <View style={styles.topBar}>
            <Text style={{ color: "white", fontFamily: "Futura", fontSize: 35 }}>
              Add Timer
            </Text>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Image source={require("./assets/x.png")} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.modalName}>
              <Text style={{ color: "white", fontFamily: "Futura", padding: 22 }}>
                Task:
              </Text>
              <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="description" keyboardType="default"/>

              <TouchableOpacity onPress={isOpenClose}>
                <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>  
                    {isToggled ? selectedEmoji + "Emoji ▲" : selectedEmoji + "Emoji ▼"}
                </Text>
                
              </TouchableOpacity>

            </View>

            {isToggled && 
            <ScrollView>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </ScrollView>
            }

            <View style={{ borderBottomColor: "white", borderBottomWidth: 1.5, width: windowWidth, opacity: 0.3, paddingTop: 15}}/>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
                Focus:
              </Text>

              <TouchableOpacity style={styles.plusButton} underlayColor="#2d2c3f" onPress={IncremenetFocusCounter}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
              <Text style={{ color: "white", padding: 20, fontFamily: "Menlo" }}>{countFocus} min</Text>
              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={DecrementFocusCounter}
              >
                <Text style={styles.plusText}>-</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1.5,
                width: windowWidth,
                opacity: 0.3,
                paddingTop: 15,
              }}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
                {" "}
                Short Break:
              </Text>
              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={IncremenetCountShortCounter}
              >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
              <Text style={{ color: "white", padding: 20, fontFamily: "Menlo" }}>
                {countShortBreak} min
              </Text>
              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={DecrementCountShortCounter}
              >
                <Text style={styles.plusText}>-</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1.5,
                width: windowWidth,
                opacity: 0.3,
                paddingTop: 15,
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "white", fontFamily: "Futura", padding: 20 }}
              >
                Long Break:{" "}
              </Text>

              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={IncremenetCountLong}
              >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
              <Text style={{ color: "white", padding: 20, fontFamily: "Menlo" }}>
                {countLongBreak} min
              </Text>
              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={DecrementCountLong}
              >
                <Text style={styles.plusText}>-</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1.5,
                width: windowWidth,
                opacity: 0.3,
                paddingTop: 15,
              }}
            />

            <View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Futura",
                  padding: 20,
                  textAlign: "center",
                }}
              >
                Long Break Interval
              </Text>

              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={IncremenetCountInterval}
              >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
              <Text
                style={{ color: "white", padding: 20, textAlign: "center", fontFamily: "Menlo" }}
              >
                {countLongInterval}
              </Text>
              <TouchableOpacity
                style={styles.plusButton}
                underlayColor="#2d2c3f"
                onPress={DecrementCountInterval}
              >
                <Text style={styles.plusText}>-</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1.5,
                width: windowWidth,
                opacity: 0.3,
                paddingTop: 30,
              }}
            />
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={styles.submitButton}
                underlayColor="#2d2c3f"
                onPress={ () =>
                    dataForCards.push(
                        {
                            id: dataForCards.length+1,
                            emoji: selectedEmoji,
                            taskName: description,
                            focusTime: countFocus,
                            shortBreakTime: countShortBreak,
                            longBreakTime: countLongBreak,
                            longBreakInterval: countLongInterval
                        }
                    )
                    + setDescription("")
                    + setModalOpen(false)
                    + isOpenClose(false)
                }
              >
                <Text style={styles.submitText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.title}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Image source={require("./assets/add.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <FlatList
            data={dataForCards}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1b2e",
    marginTop: 5,
    padding: 24,
    alignItems: "stretch"
  },
  title: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  titleText: {
    paddingLeft: 30,
    color: "white",
    fontFamily: "Futura-CondensedMedium",
    fontSize: 35,
  },
  modalStyle: {
    backgroundColor: "#1e1b2e",
    paddingTop: 30,
    margin: 0,
  },
  modalContent: {
    height: Dimensions.get("window").height,
    backgroundColor: "#1e1b2e",
    paddingTop: 60,
  },
  modalName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignContent: "center",
  },
  plusButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2d2c3f",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
  },
  plusText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  submitText: {
    color: "#fff",
    fontFamily: "Futura",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  submitButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#5040b2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
  },
  input: {
      color: "white",
      borderBottomColor: '#fff'
  }
});

const data = [
    "😀", "⏳", "🧳", "⏱️", "⏲️", "🦺", "📱", "📔", "🪔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞️", "📑", "🔖", "🏷️", "💰", "📝", "💼", "🗄️", "🚿"
]
// 
const cardData = [
    {
      id: 1,
      emoji: "😀",
      taskName: "Test - Click To Delete",
      focusTime: 25,
      shortBreakTime: 5,
      longBreakTime: 15,
      longBreakInterval: 10
    }
  ];
  


export default HomeScreen;
