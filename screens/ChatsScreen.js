// Chats (Sohbetler) sayfasının kodları
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import DATA from '../data/ChatData'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChatsScreen() {
  // Chat'in açılıp açılmadığının bilgisini tutan state
  const [isOpenedChat, setIsOpenedChat] = useState(false);

  // DATA' dan çekilen bilgilerin tutulduğu state
  const [chatsData, setChatsData] = useState(DATA);

  useEffect(() => {
    setChatsData(DATA);
  }, [])

  // Yönlendirme ekranları için tanımlanmış navigation
  const navigation = useNavigation();

  // Seçili sohbete girilmiş olan kullanıcının totalUnread değerini sıfırlamak için
  useEffect(() => {
    const updatedChatsData = chatsData.map(chat => {
      if (chat.isOpenedChat) {
        chat.totalUnread = 0;
      }
      return chat;
    });
    setChatsData(updatedChatsData);
  }, []);

  // Girilmiş olan sohbetteki kullanıcının bilgilerini 
  // ChatDetailScreen sayfasına göndermek için yazılmış bir fonksiyon
  const onSelectedPerson = (selectedPerson) => {
    navigation.navigate('ChatDetail', { selectedPerson: selectedPerson });
    setIsOpenedChat(true);
  };

  // Sohbetine girilmiş kullanıcının totalUnread (okunmamış mesaj) kutusunu
  // kaldırmak için yazılmış bir fonksiyon
  const resetTotalUnread = (selectedPerson) => {
    setChatsData(chatsData.map(chat => {
      if (chat.id === selectedPerson.id) {
        return { ...chat, totalUnread: 0 };
      }
      return chat;
    }));
  };

  // DATA' dan gelen bilgileri FlatList'in renderItem methodu ile tek tek basıyoruz

  return (
    <View style={styles.container}>
      <FlatList
        data={chatsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.dataContainer}
            onPress={() => {
                navigation.navigate('ChatDetail'),
                onSelectedPerson(item);
                resetTotalUnread(item);
            }
            }
          >
            <View style={styles.dataPhotos}>
              <Image source={item.photos} style={styles.image} />
            </View>
            <View style={styles.dataNameMessage}>
              <Text style={styles.dataName}>{item.name}</Text>
              <Text style={styles.dataLastMessage}>{item.lastMessage}</Text>
            </View>
            <View style={styles.dataTime}>
              <Text style={styles.dataTimeText}>{item.time}</Text>
              {item.totalUnread > 0 && (
                <View style={styles.dataTotalUnread}>
                  <Text style={styles.totalUnreadText}>{item.totalUnread}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate('NewChat')}
      >
        <MaterialCommunityIcons name="android-messages" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    flexDirection: 'row',
    margin: 15,
    marginTop: 35,
    marginBottom: 15,
  },
  dataPhotos: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  dataNameMessage: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 5,
  },
  dataName: {
    fontSize: 18,
    fontWeight: '600',
  },
  dataLastMessage: {
    opacity: 0.5,
    marginTop: 5,
  },
  dataTime: {
    position: 'absolute',
    right: 0,
    marginTop: 10,
  },
  dataTimeText: {
    opacity: 0.6,
  },
  dataTotalUnread: {
    position: 'absolute',
    right: 0,
    top: 20,
    width: 20,
    height: 20,
    backgroundColor: '#25d366',
    borderRadius: 10,
  },
  totalUnreadText: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  containerButton: {
    position: 'absolute',
    right: 25,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005d4b',
  }
})