// Situation (Güncellemeler) sayfasının kodları
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import SİTUAT_DATA from '../data/SituatData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SituationScreen() {
  // SİTUAT_DATA bilgilerini tutmak için kullanılan state
  const [statusData, setStatusData] = useState(SİTUAT_DATA);

  // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
  const navigation = useNavigation();

  useEffect(() => {
    setStatusData(SİTUAT_DATA);
  }, [])

  // SituatDetalScreen sayfasına seçilen öğenin bilgilerini 
  // göndermek için tanımlanmış fonksiyon
  const onSelectedPersonSituat = (selectedPerson) => {
    navigation.navigate('SituatDetail', { selectedPerson: selectedPerson });
  };

  // Seçilen ögenin dış katmanındaki yeşilliği gidermek için 
  // ayrı ayrı bilgilerini tutmak için kullanılan state 
  const [selectedItems, setSelectedItems] = useState({});

  // Öğeleri ayrı ayrı seçtikten sonra önceki 
  // bilgilerini tutmaya yarayan bir fonksiyon
  const handlePress = (itemId) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContent}>
          <View style={styles.mainTitle}>
            <Text style={styles.titleText}>Durum</Text>
          </View>
          <View style={styles.mainİcon}>
            <TouchableOpacity>
              <Entypo
                name="dots-three-vertical"
                size={24}
                color="black"
                style={{ top: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.imageContainer}>
          <TouchableOpacity style={styles.statusContent}>
            <Image source={require('../assets/mustafadns.jpg')} style={styles.titleİmage} />
            <View style={styles.imagePlus}>
              <AntDesign name="pluscircle" size={28} color="#005d4b" style={{ bottom: 1, right: 0.5 }} />
            </View>
          </TouchableOpacity>
          <View style={styles.statusContentText}>
            <Text style={styles.mainStatusPerson}>Durumum</Text>
            <Text style={styles.mainStatusPersonText}>Durum güncellemesi için dokununuz...</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.stuatDataContainer}>
        <Text style={styles.mainTitleText}>Son güncellemeler</Text>
        <FlatList
          data={statusData}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.situatDataMain}
              onPress={() => {
                navigation.navigate('SituatDetail'),
                  onSelectedPersonSituat(item),
                  handlePress(item.id);
              }
              }
            >
              <View style={[styles.outerCircle, { backgroundColor: selectedItems[item.id] ? 'white' : '#005d4b' }]}>
                <View style={styles.situatDataPhotos}>
                  <Image source={item.photos} style={styles.situatDataİmage} />
                </View>
              </View>
              <View style={styles.situatDataName}>
                <Text style={styles.situatDataNameTextFlat}>{item.name}</Text>
                <Text style={styles.situatDataTimeText}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.containerButton}
      >
        <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerButtonPencil}
      >
        <MaterialCommunityIcons name="pencil" size={24} color="#005d4b" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainTitle: {
  },
  titleText: {
    fontSize: 22,
    fontWeight: '500',
  },
  titleContent: {
    flexDirection: 'row',
    margin: 15,
  },
  mainİcon: {
    position: 'absolute',
    right: 0,
  },
  titleİmage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imageContainer: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  statusContentText: {
    marginLeft: 10,
    marginTop: 5,
  },
  mainStatusPerson: {
    fontSize: 18,
    fontWeight: '400'
  },
  mainStatusPersonText: {
    marginTop: 3,
    opacity: 0.6,
  },
  imagePlus: {
    width: 28,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 13,
    left: 35,
    bottom: 25,
  },
  stuatDataContainer: {
    margin: 15,
    bottom: 20,
  },
  mainTitleText: {
    opacity: 0.6,
    fontSize: 15,
  },
  situatDataİmage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 15,
    marginTop: 15,
  },
  outerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#005d4b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  situatDataPhotos: {
    width: 62,
    height: 62,
    backgroundColor: 'white',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  situatDataMain: {
    flexDirection: 'row',
    marginBottom: 40,
    top: 20,
  },
  situatDataName: {
    marginTop: 25,
    marginLeft: 10,
    flexDirection: 'column',
  },
  situatDataNameTextFlat: {
    fontSize: 18,
    fontWeight: '500',
    opacity: 0.8,
  },
  situatDataTimeText: {
    opacity: 0.8,
    fontWeight: '500',
    color: 'gray'
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
  },
  containerButtonPencil: {
    position: 'absolute',
    right: 30,
    bottom: 120,
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0e9c0',
  },
  flatListContent: {
    marginBottom: 150,
  }
})