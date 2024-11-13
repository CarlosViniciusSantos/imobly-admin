import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Header() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={require('../../assets/images/imobly-branca.png')} style={styles.logo} />
                <View style={styles.searchBox}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar meus Imóveis"
                        placeholderTextColor="#666"
                        editable={true}
                    />
                </View>
            </View>

            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Caraguatatuba</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Bastos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>São Sebastião</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                    <Text style={styles.categoryText}>Maré</Text>
                </TouchableOpacity>
            </ScrollView> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: '#1E3A8A',
    },
    logo: {
        width: 50,
        height: 50,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginLeft: 5,
    },
    categoriesContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#f2f2f2',
    },
    categoryButton: {
        backgroundColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
    },
    categoryText: {
        fontSize: 14,
        color: '#000',
    },
    cardContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
});