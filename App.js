// Ana Base sayfası kodları
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, TouchableWithoutFeedback, Modal, TouchableWithoutFeedbackBase, TouchableWithoutFeedbackComponent } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import NewChatScreen from './screens/NewChatScreen';
import ChatDetailScreen from './screens/ChatDetailScreen';
import UserAccountScreeen from './screens/UserAccountScreeen';
import SituatDetailScreen from './screens/SituatDetailScreen';
import SettingScreen from './screens/SettingScreen';
import HeaderScreen from './screens/HeaderScreen';
import ProfileScreen from './screens/ProfileScreen';
import CallingScreen from './screens/CallingScreen';
import İmageDetailScreen from './screens/İmageDetailScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005d4b',
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={HeaderScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='NewChat'
          component={NewChatScreen}
          options={{
            title: 'Kişi seç',
            headerTintColor: 'white',
            headerRight: () => (
              <View style={styles.containerİcon}>
                <TouchableOpacity>
                  <Feather
                    name="search"
                    size={24}
                    color="white"
                    style={{ right: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <Stack.Screen
          name='ChatDetail'
          component={ChatDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='UserAccount'
          component={UserAccountScreeen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='SituatDetail'
          component={SituatDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Setting'
          component={SettingScreen}
          options={{
            title: 'Ayarlar',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#005d4b',
              shadowOpacity: 0,
              elevation: 0,
            },
            headerRight: () => (
              <View>
                <TouchableOpacity>
                  <Feather
                    name="search"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <Stack.Screen 
          name='Profile'
          component={ProfileScreen}
          options={{
            title:'Profil',
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen 
          name='Calling'
          component={CallingScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='İmageDetail'
          component={İmageDetailScreen}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerİcon: {
    flexDirection: 'row',
  }
});