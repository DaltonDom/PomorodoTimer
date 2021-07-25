import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, ScrollView } from 'react-native';

const AddTimer = (props) => {

    const [number, onChangeNumber] = React.useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.modalContent}>
          <View style={styles.topBar}>
            <Text
              style={{
                color: "white",
                fontFamily: "Futura",
                fontSize: 35,
              }}
            >
              Add Timer
            </Text>
            <TouchableOpacity onPress={() => setModalOpen(false)}>
              <Image source={require("./assets/x.png")} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.modalName}>
              <Text
                style={{ color: "white", fontFamily: "Futura", padding: 20 }}
              >
                Task:
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="description"
                keyboardType="numeric"
              />
              <Text
                style={{ color: "white", fontFamily: "Futura", padding: 20 }}
              >
                Emoji Selector
              </Text>
            </View>

            <View></View>
            <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
              Focus:
            </Text>
            <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
              Short Break:
            </Text>

            <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
              Long Break:
            </Text>

            <Text style={{ color: "white", fontFamily: "Futura", padding: 20 }}>
              Long Break After How Many Focus Session:
            </Text>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default AddTimer;