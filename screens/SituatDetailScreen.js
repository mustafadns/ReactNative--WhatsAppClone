// SituatDetail (Güncellemeler kısmındaki durumlar) sayfasının kodları
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SituatDetailScreen = () => {

    // Yönlendirme sayfalarında kullanılmak için tanımlanmış navigation
    const navigation = useNavigation();

    // Durumların saniyesini tutmak için kullanılan state
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => Math.max(prevProgress - 1, 0)); // 1 saniye boyunca ilerleme yüzdesini azalt
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Süre dolduğunda önceki sayfaya yani durumlar sayfasına dönmek için kullanılan Effect
    useEffect(() => {
        if (progress <= 0) {
            navigation.goBack(); 
        }
    }, [progress]);

    // Seçilen ögenin gönderilen bilgilerini almak için kullanılan Route
    const route = useRoute();
    const { selectedPerson } = route.params;

    // Durum fotoğrafının saniyesinin tanımlanması
    const barWidth = (progress / selectedPerson.time) * 100;

    return (
        <View style={styles.container}>
            <Image source={selectedPerson.photos} style={styles.imageBg} />
            <View style={styles.containerMain}>
                <View style={styles.selectedPersonContent}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back-outline" size={30} color="white" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.selectedPersonName}
                        onPress={() => navigation.navigate('UserAccount', { selectedPerson: selectedPerson })}
                    >
                        <Text style={styles.selectedPersonNameText}>{selectedPerson.name}</Text>
                        <Text style={styles.selectedPersonNameTime}>{selectedPerson.time}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${barWidth}%` }]} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // marginTop: 25,
    },
    selectedPersonContent: {
        flexDirection: 'row',
    },
    containerMain: {
        marginTop: 45,
    },
    selectedPersonName: {
        marginLeft: 25,
    },
    selectedPersonNameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    selectedPersonNameTime: {
        color: 'white',
        fontSize: 12,
    },
    progressBarContainer: {
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        bottom: 55,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'white',
    },
})

export default SituatDetailScreen;