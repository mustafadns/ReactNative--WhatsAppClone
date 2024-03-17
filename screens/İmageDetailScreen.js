// İmageDetail (Sohbet Medyaları) sayfasının kodları
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MediaScreen from '../screens/MediaScreen'
import DocumentScreen from '../screens/DocumentScreen'
import LinkScreen from '../screens/LinkScreen'


const Tab = createMaterialTopTabNavigator();
export default function İmageDetailScreen() {

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
    const route = useRoute();
    const { selectedPerson } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleContent}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back-outline" size={28} color="black" style={{ marginTop: 35 , left: 10}} />
                </TouchableOpacity>
                <View style={styles.selectedPersonName}>
                    <Text style={styles.selectedPersonNameText}>{selectedPerson.name}</Text>
                </View>
            </View>
            <View style={styles.navigatorContainer}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor: 'white'
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: '#005d4b'
                        }
                    }}
                >
                    <Tab.Screen 
                        name='Media'
                        component={MediaScreen}
                        options={{
                            title: 'Medya'
                        }}
                        initialParams={{ selectedPerson }}
                    />
                    <Tab.Screen 
                        name='Document'
                        component={DocumentScreen}
                        options={{
                            title: 'Belgeler'
                        }}
                        initialParams={{ selectedPerson }}
                    />
                    <Tab.Screen 
                        name='Link'
                        component={LinkScreen}
                        options={{
                            title: 'Bağlantılar'
                        }}
                        initialParams={{ selectedPerson }}
                    />
                </Tab.Navigator>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitleContent: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    selectedPersonName: {
        marginTop: 35,
        marginLeft: 20,
    },
    selectedPersonNameText: {
        fontSize: 20,
        fontWeight: '500',
    },
    navigatorContainer: {
        height: '100%'
    }
})