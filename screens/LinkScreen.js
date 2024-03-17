// Link (Medyadaki Linkler) sayfasının kodları
import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';

export default function LinkScreen() {

  // Linklere tıklanma olayını eklediğim fonksiyon (Linkeln)
  const handlePress = () => {
    Linking.openURL('https://www.linkedin.com/in/mustafadns');
  };
  // Linklere tıklanma olayını eklediğim fonksiyon (Github)
  const handlePress1 = () => {
    Linking.openURL('https://github.com/mustafadns');
  };
  // Linklere tıklanma olayını eklediğim fonksiyon (instagram)
  const handlePress2 = () => {
    Linking.openURL('https://www.instagram.com/mustafadns/');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.linkedlnBg}  onPress={handlePress}>
          <TouchableOpacity>
            <Text style={{ color: 'white' , fontSize: 16 }}>Linkedln Profilim</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gitHubBg}  onPress={handlePress1}>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 16 }}>GitHub Profilim</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instagramBg}  onPress={handlePress2}>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 16 }}>Instagram Sayfam</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkedlnBg: {
    marginVertical: 25,
    width: 150,
    height: 50,
    backgroundColor: '#0e76a8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  gitHubBg: {
    marginVertical: 25,
    width: 150,
    height: 50,
    backgroundColor: '#171515',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  instagramBg: {
    marginVertical: 25,
    width: 150,
    height: 50,
    backgroundColor: '#f95a61',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  }
})