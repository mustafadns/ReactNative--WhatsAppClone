// Setting (Ayarlar) sayfasının kodları
import { FlatList, StyleSheet, Image, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import PERSON_DATA from '../data/PersonAccountData'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function SettingScreen() {
    // PERSON_DATA bilgilerini tutmak için kullanılan state
    const [personData, setPersonData] = useState(PERSON_DATA);

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    useEffect(() => {
        setPersonData(PERSON_DATA);
    }, [])

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={personData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.personDataContainer}>
                            <View style={styles.personDataİmage}>
                                <Image source={item.photos} style={styles.photosİmage} />
                            </View>
                            <View style={styles.personDataNameAndExplanation}>
                                <Text style={styles.personDataName}>{item.name}</Text>
                                <Text style={styles.personDataExplanation}>{item.explanation}</Text>
                            </View>
                            <View style={styles.titleİcons}>
                                <TouchableOpacity>
                                    <Ionicons
                                        name="qr-code-outline"
                                        size={24}
                                        color="black"
                                        style={{ right: 15 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <AntDesign
                                        name="downcircleo"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.containerMain}>
                <View style={styles.contentMain}>
                    <TouchableOpacity 
                        style={styles.sectionsPerson}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <View style={styles.personİcon}>
                            <MaterialCommunityIcons name="key-variant" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Hesap</Text>
                            <Text style={styles.personTextTwo}>Güvenlik bildirimleri, numara değiştirme</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <Fontisto name="locked" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Gizlilik</Text>
                            <Text style={styles.personTextTwo}>Kişileri engelleme, süreli mesajlar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <Ionicons name="person" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Avatar</Text>
                            <Text style={styles.personTextTwo}>Oluşturma, düzenleme, profil fotoğrafı</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <MaterialIcons name="chat" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Sohbetler</Text>
                            <Text style={styles.personTextTwo}>Tema, duvar kağıtları, sohbet geçmişi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <MaterialIcons name="notifications" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Bildirimler</Text>
                            <Text style={styles.personTextTwo}>Mesaj, grup ve arama sesleri</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <FontAwesome6 name="circle-notch" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Depolama ve veriler</Text>
                            <Text style={styles.personTextTwo}>Ağ kullanımı, otomatik indirme</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <AntDesign name="earth" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Uygulama dili</Text>
                            <Text style={styles.personTextTwo}>Türkçe (cihaz dili)</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <AntDesign name="questioncircleo" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Yardım</Text>
                            <Text style={styles.personTextTwo}>Yardım merkezi, bize ulaşın, gizlilik ilkesi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionsPerson}>
                        <View style={styles.personİcon}>
                            <MaterialIcons name="group" size={24} color="gray" />
                        </View>
                        <View style={styles.personTextTitle}>
                            <Text style={styles.personTextOne}>Arkadaş davet edin</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    personDataContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 20,
        borderColor: 'gray',
    },
    photosİmage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    personDataNameAndExplanation: {
        marginLeft: 20,
        marginTop: 15,
    },
    personDataName: {
        fontSize: 20,
    },
    personDataExplanation: {
        color: 'gray',
        fontWeight: '500',
    },
    titleİcons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 45,
    },
    containerMain: {},
    sectionsPerson: {
        marginLeft: 25,
        flexDirection: 'row',
        marginBottom: 45,
    },
    personİcon: {},
    personTextTitle: {
        marginLeft: 20,
        bottom: 5,
    },
    personTextOne: {
        fontSize: 18,
        fontWeight: '500',
        opacity: 0.8,
    },
    personTextTwo: {
        color: 'gray',
        fontWeight: '500'
    },
    contentMain: {
        top: 30,
        marginBottom: 150,
    }
})