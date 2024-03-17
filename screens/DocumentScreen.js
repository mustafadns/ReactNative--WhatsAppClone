// Document (Belgeler) sayfasının kodları
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DocumentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Görüntülenecek belge bulunmamaktadır</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '600',
    marginBottom: 100,
  }
})