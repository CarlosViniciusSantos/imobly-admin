import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useLoginStore } from '../stores/useLoginStore';
import { getObjectData } from '../utils/asyncStorage';

export default function Init() {
  const router = useRouter();
  const { login } = useLoginStore();

  useEffect(() => {
    const checkUserLogged = async () => {
      const userLogged = await getObjectData('userLogged');
      if (userLogged) {
        login(userLogged);
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    };

    setTimeout(checkUserLogged, 3000);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Imobly</Text>
        <Text style={{ fontSize: 16, marginVertical: 10 }}>Encontre seu imóvel dos sonhos com o Imobly.</Text>
        <ActivityIndicator style={{ marginVertical: 30 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});