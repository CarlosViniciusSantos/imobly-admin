import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavbarPadrao({ texto }) {

  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{texto}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#1E3A8A',
    borderTopWidth: 20,
    borderColor: 'transparent',
    elevation: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  backButton: {
    marginRight: 10,
  },
  titleText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});
