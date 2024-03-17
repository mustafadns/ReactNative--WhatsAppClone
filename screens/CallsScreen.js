// Calls (Aramalar) sayfasının kodları
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CALL_DATA from "../data/CallData";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function CallsScreen() {
  // CALL_DATA' bilgilerini tutmak için kullanılan state
  const [callData, setCallData] = useState(CALL_DATA);
  const navigation = useNavigation();

  useEffect(() => {
    setCallData(CALL_DATA);
  }, []);

    // CallingScreen sayfasına seçilen öğenin bilgilerini 
    // göndermek için tanımlanmış fonksiyon
  const personİnformationCalling = (selectedPerson) => {
    navigation.navigate("Calling", { selectedPerson: selectedPerson });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentOne}>
        <View style={styles.contentTitle}>
          <View style={[styles.iconBc, { transform: [{ rotate: "90deg" }] }]}>
            <MaterialCommunityIcons name="paperclip" size={28} color="white" />
          </View>
          <View style={styles.titleContentTexts}>
            <Text style={styles.titleMainText}>Arama bağlantısı oluştur</Text>
            <Text style={styles.titleText}>
              WhatsApp aramanız için bağlantı paylaşın
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.contentMainTitle}>
        <Text style={styles.MainTitleText}>En son</Text>
      </View>
      <View style={styles.contentTwo}>
        <FlatList
          style={styles.flatListCallData}
          data={callData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.callDataContent}
              onPress={() => {
                navigation.navigate("Calling");
                personİnformationCalling(item);
              }}
            >
              <View style={styles.callDataMainImage}>
                <Image source={item.photos} style={styles.callDataImage} />
              </View>
              <View style={styles.callDataNameAndTime}>
                <Text style={styles.callDataName}>{item.name}</Text>
                <View style={styles.timeMain}>
                  <Feather name="arrow-down-left" size={21} color="#cc0808" />
                  <Text style={styles.callDataTime}>{item.time}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.iconPhone}
                onPress={() => {
                  navigation.navigate("Calling");
                  personİnformationCalling(item);
                }}
              >
                <MaterialIcons name="local-phone" size={26} color="#005d4b" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.containerButton}
        // onPress={() => navigation.navigate('NewChat')}
        >
          <MaterialCommunityIcons name="phone-plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOne: {
    margin: 15,
  },
  contentTitle: {
    flexDirection: "row",
  },
  iconBc: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#005d4b",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContentTexts: {
    marginLeft: 15,
  },
  titleMainText: {
    fontSize: 19,
    fontWeight: "400",
  },
  titleText: {
    fontSize: 14,
    color: "gray",
    fontWeight: "400",
  },
  contentMainTitle: {
    marginHorizontal: 15,
  },
  MainTitleText: {
    fontSize: 15,
    fontWeight: "500",
  },
  contentTwo: {
    marginBottom: 25,
  },
  callDataImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  callDataContent: {
    marginHorizontal: 15,
    marginVertical: 20,
    flexDirection: "row",
  },
  callDataNameAndTime: {
    marginLeft: 20,
  },
  callDataName: {
    fontSize: 19,
    fontWeight: "400",
  },
  callDataTime: {
    fontSize: 15,
    color: "gray",
    fontWeight: "500",
    marginLeft: 5,
  },
  timeMain: {
    flexDirection: "row",
  },
  iconPhone: {
    position: "absolute",
    right: 0,
    marginTop: 10,
  },
  containerButton: {
    position: "absolute",
    right: 25,
    bottom: 130,
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#005d4b",
  },
  flatListCallData: {
    marginBottom: 100,
  },
});
