// Profile (Profil/Hesabım) sayfasının kodları
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import PERSON_DATA from '../data/PersonAccountData'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {

    // PERSON_DATA bilgileri tutmak için kkullanılan state
    const [personProfileData, setPersonProfileData] = useState(PERSON_DATA);

    useEffect(() => {
        setPersonProfileData(PERSON_DATA);
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={personProfileData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.contentPersonProfile}>
                        <TouchableOpacity style={styles.personContentİmage}>
                            <Image source={item.photos} style={styles.personImage} />
                            <View style={styles.İconBg}>
                                <Entypo name="camera" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.contentPersonİnformation}>
                            <View style={styles.personİnformationContent}>
                                <View style={styles.personİcon}>
                                    <Ionicons name="person" size={24} color="gray" />
                                </View>
                                <View style={styles.personTexts}>
                                    <Text style={styles.personTitleText}>Ad</Text>
                                    <Text style={styles.personNameText}>{item.name}</Text>
                                    <Text style={styles.personText}>Bu kullanıcı adınız ya da anahtarınız değildir. Bu ad, WhatsApp kişileriniz tarafından görülebilir.</Text>
                                </View>
                                <TouchableOpacity style={styles.personİconEnd}>
                                    <MaterialCommunityIcons name="pencil" size={26} color="#005d4b" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personİnformationContent}>
                                <View style={styles.personİcon}>
                                    <AntDesign name="exclamationcircleo" size={24} color="gray" />
                                </View>
                                <View style={styles.personTexts}>
                                    <Text style={styles.personTitleText}>Hakkımda</Text>
                                    <Text style={styles.personText}>Bu kullanıcı adınız ya da anahtarınız değildir. Bu ad, WhatsApp kişileriniz tarafından görülebilir.</Text>
                                </View>
                                <TouchableOpacity style={styles.personİconEnd}>
                                    <MaterialCommunityIcons name="pencil" size={26} color="#005d4b" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.personİnformationContent}>
                                <View style={styles.personİcon}>
                                    <MaterialIcons name="phone" size={24} color="gray" />
                                </View>
                                <View style={styles.personTexts}>
                                    <Text style={styles.personTitleText}>Telefon</Text>
                                    <Text style={styles.personNameText}>{item.phoneNumber}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentPersonProfile: {
        margin: 15,
    },
    personContentİmage: {
        alignItems: 'center',
        marginTop: 25,
    },
    personImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    İconBg: {
        width: 60,
        height: 60,
        backgroundColor: '#005d4b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        left: 80,
        bottom: 60,
    },
    contentPersonİnformation: {
        flexDirection: 'column',
    },
    personİnformationContent: {
        flexDirection: 'row',
        marginBottom: 50,
    },
    personTexts: {
        marginLeft: 20,
    },
    personTitleText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '500'
    },
    personNameText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
    },
    personText: {
        color: 'gray',
        fontWeight: '500'
    }
})