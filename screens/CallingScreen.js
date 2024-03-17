// Calling (Arama) sayfasının kodları
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function CallingScreen() {
  // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
  const navigation = useNavigation();

  // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
  const route = useRoute();
  const { selectedPerson } = route.params;

  // Arama sayfasındaki sesi kapatma, video ve hoparlör ikonlarının 
  // açık ya da kapalı olduğu bilgisini tutan state
  const [icon1Pressed, setIcon1Pressed] = useState(false);
  const [icon2Pressed, setIcon2Pressed] = useState(false);
  const [icon3Pressed, setIcon3Pressed] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/wp-back.png')} style={styles.bgImage}>
        <View style={styles.content}>
          <View style={styles.contentOne}>
            <View style={styles.firsContent}>
              <View style={styles.firsText}>
                <FontAwesome name="lock" size={24} color="black" style={{ opacity: 0.7, }} />
                <Text style={styles.firstComponetText}>Uçtan uca şifrelenmiş</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.addUsersİcon}
              onPress={() => navigation.navigate('NewChat')}
            >
              <FontAwesome5 name="user-plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.callingPersonImage}>
            <Image source={selectedPerson.photos} style={styles.callingPhotos} />
          </View>
          <View style={styles.callingName}>
            <Text style={styles.callingNameText}>{selectedPerson.name}</Text>
          </View>
          <View style={styles.decryptionStatus}>
            <Text style={styles.decryptionStatusText}>Çalıyor...</Text>
          </View>
        </View>
        <View style={styles.contentEnd}>
          <View style={styles.contentEndMain}>
            <View style={styles.sections}>
              <TouchableOpacity onPress={() => setIcon1Pressed(!icon1Pressed)}>
                <View style={[styles.iconBg, icon1Pressed && styles.iconBgPressed]}>
                  <Foundation name="volume" size={30} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIcon2Pressed(!icon2Pressed)}>
                <View style={[styles.iconBg, icon2Pressed && styles.iconBgPressed]}>
                  <FontAwesome5 name="video" size={28} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIcon3Pressed(!icon3Pressed)}>
                <View style={[styles.iconBg, icon3Pressed && styles.iconBgPressed]}>
                  <MaterialCommunityIcons name="microphone-off" size={30} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                  }
                }
              >
                <View style={styles.iconCloseBg}>
                  <MaterialCommunityIcons name="phone-hangup" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  firsText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callingPhotos: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  content: {
    alignItems: 'center',
    marginTop: 40,
  },
  firsContent: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  contentOne: {
    flexDirection: 'row',
  },
  addUsersİcon: {
    position: 'absolute',
    left: 250,
  },
  firstComponetText: {
    marginLeft: 15,
    fontSize: 15,
    opacity: 0.7,
  },
  callingPersonImage: {
    marginBottom: 30,
  },
  callingName: {
    marginBottom: 10,
  },
  callingNameText: {
    fontSize: 30,
    fontWeight: '500',
    opacity: 0.8,
  },
  decryptionStatus: {
    marginBottom: 30,
  },
  decryptionStatusText: {
    fontSize: 18,
  },
  contentEnd: {
    top: 380,
    width: '100%',
    height: 100,
    backgroundColor: '#005d4b',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentEndMain: {
    marginHorizontal: 40,
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  iconCloseBg: {
    backgroundColor: '#d30808',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    borderRadius: 25,
  },
  iconBg: {
    backgroundColor: 'transparent',
    borderRadius: 25, // Yarım yuvarlak yapmak için genişliğin yarısı kadar olmalı
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  iconBgPressed: {
    backgroundColor: '#bebebe',
  }
})