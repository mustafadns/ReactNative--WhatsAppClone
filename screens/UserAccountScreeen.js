// UserAccount (Seçilen Kişinin) sayfasının kodları
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function UserAccountScreeen() {

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
    const route = useRoute();
    const { selectedPerson } = route.params;

    // CallingScreen sayfasına seçilen öğenin bilgilerini 
    // göndermek için tanımlanmış fonksiyon
    const personİnformationCalling = (selectedPerson) => {
        navigation.navigate('Calling', { selectedPerson: selectedPerson });
    };

    // İmageDetailScreen sayfasına seçilen öğenin bilgilerini 
    // göndermek için tanımlanmış fonksiyon
    const personİnformation = (selectedPerson) => {
        navigation.navigate('İmageDetail', { selectedPerson: selectedPerson });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentOne}>
                <TouchableOpacity>
                    <Ionicons
                        name="arrow-back-outline"
                        size={30}
                        color="black"
                        style={{ top: 50, left: 5 }}
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
                <View style={styles.personİmageContainer}>
                    <TouchableOpacity>
                        <Image
                            source={selectedPerson.photos}
                            style={styles.personİmage}
                        />
                    </TouchableOpacity>
                    <View style={styles.personTitle}>
                        <Text style={styles.personName}>{selectedPerson.name}</Text>
                    </View>
                    <View style={styles.personTitle}>
                        <Text style={styles.personNumber}>{selectedPerson.phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.treePoints}>
                    <TouchableOpacity>
                        <Entypo
                            name="dots-three-vertical"
                            size={24}
                            color="black"
                            style={{ top: 4 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerİnputContainer}>
                    <TouchableOpacity 
                        style={styles.headerPhone}
                        onPress={() => {
                            navigation.navigate('Calling');
                            personİnformationCalling(selectedPerson)
                        }
                    }
                    >
                        <FontAwesome5 name="phone-alt" size={24} color="#005d4b" />
                        <Text style={styles.headerİconText}>Sesli</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerVideo}>
                        <FontAwesome5 name="video" size={24} color="#005d4b" />
                        <Text style={styles.headerİconText}>Görüntülü</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerSearch}>
                        <AntDesign name="search1" size={24} color="#005d4b" />
                        <Text style={styles.headerİconText}>Ara</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentTwo}>
                <View style={styles.contentTwoDetail}>
                    <TouchableOpacity 
                        style={styles.mainMedia}
                        onPress={() => {
                                navigation.navigate('İmageDetail');
                                personİnformation(selectedPerson);
                            }
                        }
                    >
                        <View style={styles.media}>
                            <Text style={styles.mediaText}>Medya, bağlantılar ve belgeler</Text>
                        </View>
                        <View style={styles.mediaAngel}>
                            <Text style={styles.mediaNumberText}>8</Text>
                            <Fontisto name="angle-right" size={14} color="black" style={{ top: 2, color: 'gray', fontWeight: '500' }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mediaPhotos}>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/mustafadns.jpg')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/Linkedln.png')} style={{ width: 115, height: 115, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/Instagram.jpeg')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={selectedPerson.photos} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/GitHub.png')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/GitHub-Repo-1.png')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/GitHub-Repo-2.png')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaPhoto}>
                        <Image source={require('../assets/GitHub-Repo-3.png')} style={{ width: 110, height: 110, borderRadius: 15, }} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.contentThree}>
                <View style={styles.mainThreeContent}>
                    <TouchableOpacity style={styles.notifications}>
                        <Ionicons name="notifications" size={25} color="gray" />
                        <Text style={styles.notificationsText}>Bildirimleri sessize al</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.musicalNote}>
                        <Ionicons name="musical-note" size={25} color="gray" />
                        <Text style={styles.musicalNoteText}>Özel bildirimler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.photoSizeSelect}>
                        <MaterialIcons name="photo-size-select-actual" size={25} color="gray" />
                        <Text style={styles.photoSizeSelectText}>Medya görünürlüğü</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentFour}>
                <View style={styles.mainContentFour}>
                    <TouchableOpacity
                        style={styles.contentİconMain}
                    >
                        <View style={styles.mainİcon}>
                            <Fontisto name="locked" size={24} color="gray" />
                        </View>
                        <View style={styles.mainİconText}>
                            <Text style={styles.mainİconText1}>Şifreleme</Text>
                            <Text style={styles.mainİconText2}>Mesajlar ve aramalar uçtan uca şifrelidir. Doğrulamak için dokunun</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.contentİconMain}
                    >
                        <View style={styles.mainİcon}>
                            <MaterialCommunityIcons name="progress-clock" size={24} color="gray" />
                        </View>
                        <View style={styles.mainİconText}>
                            <Text style={styles.mainİconText1}>Süreli mesajlar</Text>
                            <Text style={styles.mainİconText2}>Kapalı</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    
                    style={styles.contentİconMain}
                    >
                        <View style={styles.mainİcon}>
                            <MaterialCommunityIcons name="message-lock" size={24} color="gray" />
                        </View>
                        <View style={styles.mainİconText}>
                            <Text style={styles.mainİconText1}>Sohbet kilitli</Text>
                            <Text style={styles.mainİconText2}>Bu sohbeti bu cihazda kilitleyin ve gizleyin</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentFive}>
                <View style={styles.mainContentFive}>
                    <View style={styles.contentFiveTitle}>
                        <Text style={styles.contentFiveTitleText}>Ortak grup yok</Text>
                    </View>
                    <TouchableOpacity style={styles.contentFiveİconText}>
                        <View style={styles.contentFiveİconBc}>
                            <FontAwesome6 name="user-group" size={24} color="white" />
                        </View>
                        <View style={styles.mainContentFiveText}>
                            <Text style={styles.contentFiveText}>{selectedPerson.name} ile grup oluştur</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentSix}>
                    <View style={styles.mainContentSix}>
                        <TouchableOpacity
                            style={styles.contentSixİconText}
                        >
                            <View style={styles.contentSixİcon}>
                                <Entypo name="block" size={24} color="#ee3b3b" />
                            </View>
                            <View style={styles.contentSixTitle}>
                                <Text style={styles.contentSixText}>{selectedPerson.name} kişisini engelle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.contentSixİconText}
                        >
                            <View style={styles.contentSixİcon}>
                                <AntDesign name="dislike1" size={24} color="#ee3b3b" />
                            </View>
                            <View style={styles.contentSixTitle}>
                                <Text style={styles.contentSixText}>{selectedPerson.name} kişisini şikayet et</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    contentOne: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        height: 400,
    },
    personİmageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    personTitle: {
        marginTop: 10,
    },
    personİmage: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    treePoints: {
        position: 'absolute',
        right: 10,
        top: 50,
    },
    personName: {
        fontSize: 22,
        fontWeight: '500'
    },
    personNumber: {
        fontSize: 19,
        color: 'gray'
    },
    contentTwo: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        backgroundColor: 'white'
    },
    mediaText: {
        fontSize: 16,
        opacity: 0.6,
        fontWeight: '500',
    },
    mainMedia: {
        flexDirection: 'row',
    },
    mediaAngel: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    contentTwoDetail: {
        margin: 10,
    },
    mediaNumberText: {
        fontSize: 20,
        marginTop: -5,
        color: 'gray',
        fontWeight: '500'
    },
    mediaPhotos: {
        marginLeft: 10,
        marginVertical: 10,
        marginBottom: 20,
        flexDirection: 'row',
    },
    mediaPhoto: {
        marginRight: 15,
    },
    contentThree: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        backgroundColor: 'white'
    },
    headerİnputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    headerPhone: {
        left: 15,
        borderWidth: 1,
        width: 120,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'gray',
    },
    headerVideo: {
        borderWidth: 1,
        width: 120,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'gray',
    },
    headerSearch: {
        right: 15,
        borderWidth: 1,
        width: 120,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'gray',
    },
    headerİconText: {
        marginTop: 8,
        fontWeight: '500',
    },
    mainThreeContent: {
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 20,
    },
    notifications: {
        flexDirection: 'row',
    },
    notificationsText: {
        marginLeft: 25,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    musicalNote: {
        flexDirection: 'row',
        marginTop: 30,
    },
    musicalNoteText: {
        marginLeft: 25,
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
    },
    photoSizeSelect: {
        flexDirection: 'row',
        marginTop: 30,
    },
    photoSizeSelectText: {
        marginLeft: 25,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    contentFour: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        backgroundColor: 'white'
    },
    mainContentFour: {
        flexDirection: 'column',
        margin:15,
        marginTop: 25,
    },
    contentİconMain: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    mainİconText: {
        marginLeft: 25,
    },
    mainİconText1: {
        fontSize: 18,
        fontWeight: '400'
    },
    mainİconText2: {
        marginTop: 5,
        fontSize: 15,
        color: 'gray',
        fontWeight: '500'
    },
    mainİcon: {
        marginTop: 5,
    },
    contentFive: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        backgroundColor: 'white'
    },
    mainContentFive: {
        margin: 15,
    },
    contentFiveTitle: {
        marginBottom: 20,
    },
    contentFiveTitleText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '500',
    },
    contentFiveİconText: {
        flexDirection: 'row',
    },
    contentFiveİconBc: {
        width: 50,
        height: 50,
        backgroundColor: '#005d4b',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContentFiveText: {
        marginLeft: 15,
        marginTop: 10,
    },
    contentFiveText: {
        fontSize: 17,
        fontWeight: '500'
    },
    contentSix: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 50,
    },
    mainContentSix: {
        margin: 15,
        marginTop: 25,
    },
    contentSixİconText: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    contentSixTitle: {
        marginLeft: 15,
    },
    contentSixText: {
        fontSize: 18,
        color: '#ee3b3b',
        fontWeight: '500',
    },
    contentSixİcon: {
        marginTop: 3,
    }
})