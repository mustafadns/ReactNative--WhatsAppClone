// header (Başlık(WhatsApp yazızının olduğu kısım)) sayfasının kodları
import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CommunityScreen from './CommunityScreen';
import ChatsScreen from './ChatsScreen';
import SituationScreen from './SituationScreen';
import CallsScreen from './CallsScreen';


const Tab = createMaterialTopTabNavigator();
export default function HeaderScreen() {

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    // Modalın açık veya kapalı olduğunu tutaan state
    const [isModalVisible, setIsModalVisible] = useState(false); 

    // Modalın görünürlüğünü tersine çevirmek için yazılmış bir fonksiyon
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible); 
    };

    // Ana Sayfaya tekrardan dönüldüğünde modalın pasif hale geçmesini ve 
    // tekrardan kullanılmasını sağlayan fonksiyon
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setIsModalVisible(false);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.containerHeader}>
            <View style={styles.headerMain}>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>WhatsApp</Text>
                </View>
                <View style={styles.containerİcon}>
                    <TouchableOpacity>
                        <Entypo
                            name="camera"
                            size={24}
                            color="white"
                            style={{right:50}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather
                            name="search"
                            size={24}
                            color="white"
                            style={{right:25}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleModal}
                    >
                        <Entypo
                            name="dots-three-vertical"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={toggleModal}
                    >
                        <TouchableWithoutFeedback>
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 10, top: 55 }}
                                onPress={toggleModal}
                            >
                                <View style={styles.modalMain}>
                                    <TouchableOpacity
                                        style={styles.modalContainer}
                                    >
                                        <Text style={styles.modalText}>Yeni grup</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalContainer}
                                    >
                                        <Text style={styles.modalText}>Yeni toplu mesaj</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalContainer}
                                    >
                                        <Text style={styles.modalText}>Bağlı cihazlar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalContainer}
                                    >
                                        <Text style={styles.modalText}>Yıldızlı mesajlar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalContainer}
                                        onPress={() => {
                                                navigation.navigate('Setting');
                                            }
                                        }
                                    >
                                        <Text style={styles.modalText}>Ayarlar</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </View>
            <View style={styles.tabNavigator}>
                <Tab.Navigator
                    initialRouteName='Chats'
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor: '#005d4b',
                        },
                        tabBarLabelStyle: {
                            color: 'white',
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <Tab.Screen
                        name="Community"
                        component={CommunityScreen}
                        options={{
                            tabBarIcon: () => (
                                <FontAwesome name="group" size={24} color="white" />
                            ),
                            tabBarLabelStyle: {
                                display: 'none'
                            }
                        }}
                    />
                    <Tab.Screen
                        name="Chats"
                        component={ChatsScreen}
                    />
                    <Tab.Screen
                        name="Situation"
                        component={SituationScreen}
                    />
                    <Tab.Screen
                        name="Calls"
                        component={CallsScreen}
                    />
                </Tab.Navigator>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        height: '100%',
    },
    tabNavigator: {
        flex: 1,
    },
    headerMain: {
        height: 80,
        backgroundColor: '#005d4b',
        flexDirection: 'row',
    },
    headerTitle: {
        marginTop: 40,
        marginLeft: 10,
    },
    headerTitleText: {
        fontSize: 24,
        color: 'white'
    },
    containerİcon: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 40,
    },
    modalMain: {
        backgroundColor: 'white',
        width: 200,
        height: 220,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    modalContainer: {
        marginBottom: 22,
        marginLeft: 10,
    },
    modalText: {
        fontSize: 16,
        opacity: 0.7,
    },
})