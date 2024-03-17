// Medya (Medyadaki fotoğraflar) sayfasının kodları
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function MediaScreen() {

  // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
  const route = useRoute();
  const { selectedPerson } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>En son</Text>
        </View>
        <View style={styles.mediaMainPhotos}>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/mustafadns.jpg')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/Linkedln.png')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/Instagram.jpeg')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={selectedPerson.photos} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/GitHub.png')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/GitHub-Repo-1.png')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/GitHub-Repo-2.png')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.photos}
          >
            <Image source={require('../assets/GitHub-Repo-3.png')} style={{ width: 130, height: 130 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 10,
  },
  title: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '700',
  },
  mediaMainPhotos: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  photos: {
    marginVertical: 5,
  }
})