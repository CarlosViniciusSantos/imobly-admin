import React from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function CardProperty({ id, nome, descricao, foto_imovel }) {
    const router = useRouter();

    return (
        <View style={styles.propertyCard}>
            <Image source={foto_imovel ? { uri: foto_imovel } : require('../../assets/images/imovel1.png')} style={styles.logo} />
            <View style={styles.propertyInfo}>
                <Text style={styles.propertyName}>{nome}</Text>
                <Text style={styles.propertyDescription}>{descricao}</Text>
                <TouchableOpacity onPress={() => router.push({pathname: '/detailsProperty', params: {id}})}>
                    <Text style={styles.linkText}>Clique aqui para ver os detalhes do Imóvel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    companiesContainer: {
        paddingHorizontal: 10,
    },
    propertyCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    propertyInfo: {
        flex: 1,
    },
    propertyName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    propertyDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    linkText: {
        fontSize: 14,
        color: '#1E3A8A',
    },
});