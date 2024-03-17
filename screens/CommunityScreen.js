// Community (Topluluk) sayfasının kodları 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.icon}>
          <FontAwesome name="group" size={24} color="#dddddd" />
        </View>
        <View style={styles.imagePlus}>
              <AntDesign name="pluscircle" size={26} color="#005d4b" style={{ bottom: 1, right: 0.5 }} />
            </View>
        <View style={styles.mainTitle}>
          <Text style={styles.titleText}>Yeni topluluk</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  mainContainer: {
    flexDirection: 'row',
    
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  mainTitle: {
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500'
  },
  imagePlus: {
    width: 26,
    height: 26,
    backgroundColor: 'white',
    borderRadius: 12,
    right: 18,
    top: 28,
  },
})