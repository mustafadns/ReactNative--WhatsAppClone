// ChatDetail (Sohbet Detayları) sayfasının kodları
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, ImageBackground, Modal, TextInput, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ChatDetailScreen() {

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
    const route = useRoute();
    const { selectedPerson } = route.params;

    // Text inputun bilgilerinin tutulduğu state 
    const [inputText, setInputText] = useState('');

    // Gönderme tuşu ve sesli mesaj bağlantısını yapmak için 
    // kullanılan bilgilerin tutulduğu state
    const [iconName, setIconName] = useState('keyboard-voice');

    // UserAccountScreen sayfasına seçilen öğenin bilgilerini 
    // göndermek için tanımlanmış fonksiyon
    const personİnformation = (selectedPerson) => {
        navigation.navigate('UserAccount', { selectedPerson: selectedPerson });
    };

    // CallingScreen sayfasına seçilen öğenin bilgilerini 
    // göndermek için tanımlanmış fonksiyon
    const personİnformationCalling = (selectedPerson) => {
        navigation.navigate('Calling', { selectedPerson: selectedPerson });
    };

    // Gönderme ve sesli mesaj tuşunun kordinasyonunu sağlamak için yazılmış bir fonksiyon
    const handleChangeText = (text) => {
        setInputText(text);
        // Yazı varsa iconu değiştir
        if (text.trim() !== '') {
            setIconName('send');
        } else {
            setIconName('keyboard-voice');
        }
    };

    // Modalın açık veya kapalı olduğunun bilgisini tutan state
    const [isModalVisible, setIsModalVisible] = useState(false); 

    // Modalın görünürlüğünü tersine çevirmek için yazılmış bir fonksiyon
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    // ChatDetail sayfasına geriye dönüldüğünde tekrardan 
    // aktif olmasını sağlamak için kullanılan Effect
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setIsModalVisible(false);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.mainContext}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back-outline" size={24} color="white" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.personHeader}
                        onPress={() => {
                            navigation.navigate('UserAccount');
                            personİnformation(selectedPerson);
                        }
                        }
                    >
                        <Image source={selectedPerson.photos} style={styles.mainImage} />
                        <View style={styles.headerNameAndTimeText}>
                            <Text style={styles.headerText}>{selectedPerson.name}</Text>
                            <Text style={styles.headerTime}>{selectedPerson.time}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.contentİcon}>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="videocam"
                                size={30}
                                color="white"
                                style={{ right: 50 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Calling');
                                personİnformationCalling(selectedPerson);
                            }
                            }
                        >
                            <FontAwesome6
                                name="phone"
                                size={23}
                                color="white"
                                style={{ right: 25, top: 4 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo
                                name="dots-three-vertical"
                                size={24}
                                color="white"
                                style={{ top: 4 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ImageBackground
                source={require('../assets/wp-back.png')}
                style={styles.content}>
                <View style={styles.chatContainer}>
                    <View style={styles.incomingMessage}>
                        <Text style={styles.incomingText}>Yazılım sektöründe aktif olarak iş arıyor musun ?</Text>
                    </View>
                    <View style={styles.sendMessageContainer}>
                        <View style={styles.mainChat}>
                            <Text style={styles.ChatText}>Aktif iş görüşmelerine açığım iş arıyorum ...</Text>
                        </View>
                        <View style={styles.mainChat}>
                            <Text style={styles.ChatText}>Mustafa Danışan GitHub Profili : mustafadns</Text>
                        </View>
                        <View style={styles.mainChat}>
                            <Text style={styles.ChatText}>Mustafa Danışan Linkedin Profili : www.linkedin.com/in/mustafadns</Text>
                        </View>
                    </View>
                    <View style={styles.incomingMessage}>
                        <Text style={styles.incomingText}>{selectedPerson.lastMessage}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <View style={styles.textİnputContent}>
                            <TextInput
                                placeholder='Mesaj...'
                                style={styles.textInputMain}
                                onChangeText={handleChangeText}
                                value={inputText}
                            />
                            <View>
                                <View>
                                    <Entypo name="emoji-happy" size={30} color="gray" style={styles.happy} />
                                </View>
                                <View style={styles.ContentİconMain}>
                                    <TouchableOpacity
                                        onPress={toggleModal}
                                    >
                                        <FontAwesome name="paperclip" size={30} color="gray" style={styles.paperclip} />
                                    </TouchableOpacity>
                                    <Modal
                                        animationType="fade"
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
                                                    <View style={styles.iconTotalMain}>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#6959cd'}]}
                                                        >
                                                            <Ionicons name="document" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#cd1076'}]}
                                                        >
                                                            <FontAwesome name="camera" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#eeaeee'}]}
                                                        >
                                                            <Foundation name="photo" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#ff8c00'}]}
                                                        >
                                                            <MaterialCommunityIcons name="headphones" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#228b22'}]}
                                                        >
                                                            <FontAwesome6 name="location-dot" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#1b8bb4'}]}
                                                        >
                                                            <Ionicons name="person" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={[styles.iconBg,{backgroundColor:'#458b74'}]}
                                                        >
                                                            <Foundation name="graph-trend" size={28} color="white" style={{top:7}}/>
                                                            <Text style={styles.iconNameText}>Belge</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </TouchableWithoutFeedback>
                                    </Modal>
                                    <TouchableOpacity>
                                        <Entypo name="camera" size={30} color="gray" style={styles.camera} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.textİnputİcon}>
                            <MaterialIcons name={iconName} size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#005d4b',
        flexDirection: 'row',
    },
    mainContext: {
        margin: 15,
        flexDirection: 'row',
        marginTop: 45,
    },
    mainImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10,
    },
    headerText: {
        marginTop: 5,
        marginLeft: 15,
        fontSize: 18,
        color: 'white'
    },
    contentİcon: {
        flexDirection: 'row',
        position: 'absolute',
        left: 310,
    },
    personHeader: {
        flexDirection: 'row'
    },
    content: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    chatContainer: {
        position: 'absolute',
        right: 10,
        flexDirection: 'column',
        bottom: 20,
    },
    mainChat: {
        width: 250,
        height: 'auto',
        backgroundColor: '#dcf8c6',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginLeft: 145,
        marginBottom: -25,
        marginTop: 35,
    },
    ChatText: {
        padding: 10,
        fontSize: 16,
        fontWeight: '500'
    },
    textInputMain: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: 350,
        top: 45,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 15,
        fontSize: 18,
    },
    textInputContainer: {
        flexDirection: 'row',
    },
    textİnputİcon: {
        top: 45,
        left: 5,
        backgroundColor: '#005d4b',
        width: 46,
        height: 46,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },
    happy: {
        width: 30,
        marginTop: 3,
        marginLeft: 5,
    },
    inputText: {
        color: 'gray'
    },
    paperclip: {
        marginTop: 3,
        right: 15,
    },
    camera: {
        marginTop: 3,
    },
    ContentİconMain: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
    },
    incomingMessage: {
        width: 250,
        backgroundColor: '#f2f2f2',
        marginLeft: 10,
        height: 'auto',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 20,
        top: 30,
    },
    incomingText: {
        padding: 10,
        fontSize: 16,
        fontWeight: '500',
    },
    sendMessageContainer: {
        marginTop: 15,
    },
    headerTime: {
        left: 15,
        fontSize: 13,
        color: 'white',
        opacity: 0.6,
    },
    headerNameAndTimeText: {
        bottom: 5,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
    },
    modalMain: {
        top: 400,
        right: 10,
        backgroundColor: 'white',
        width: 380,
        height: 300,
        borderRadius: 15,
    },
    iconBg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 25,
    },
    iconTotalMain: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    iconNameText: {
        top: 25,
    }
})