// NewChat (Yeni sohbet oluşturma) sayfasının kodları
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import DATA from '../data/ChatData'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function NewChatScreen() {

    // DATA'dan bilgileri çekmek için kullanılan state
    const [chatsData, setChatsData] = useState(DATA);
    const navigation = useNavigation();

    useEffect(() => {
        setChatsData(DATA);
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.icons}>
                        <View style={styles.icon}>
                            <FontAwesome6 name="user-group" size={24} color="white" />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>Yeni grup</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                        <View style={styles.icon}>
                            <Ionicons name="person-add" size={24} color="white" />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>Yeni kişi</Text>
                            <TouchableOpacity>
                                <Ionicons
                                    name="qr-code-outline"
                                    size={24}
                                    color="black"
                                    style={{ left: 210, opacity: 0.6 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icons}>
                        <View style={styles.icon}>
                            <FontAwesome name="group" size={24} color="white" />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>Yeni topluluk</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainTitle}>
                    <Text style={styles.mainTitleText}>WhatsApp'daki kişiler</Text>
                </View>
            </View>
            <FlatList
                data={chatsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.dataPerson}
                    >
                        <View style={styles.mainImage}>
                            <Image source={item.photos} style={styles.image} />
                        </View>
                        <View style={styles.dataName}>
                            <Text style={styles.nameText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    mainContainer: {
        flexDirection: 'column',
    },
    flexContainer: {
        flexDirection: 'column'
    },
    icons: {
        marginBottom: 45,
        flexDirection: 'row',
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: '#005d4b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    title: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
    },
    mainTitle: {
        marginTop: -25,
    },
    mainTitleText: {
        opacity: 0.6,
        fontSize: 15,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    dataPerson: {
        flexDirection: 'row',
        marginTop: 30,
    },
    dataName: {
        marginTop: 15,
        marginLeft: 15,
    },
    nameText: {
        fontSize: 18,
        fontWeight: '500',
    }
})