import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Pastikan Anda sudah menginstal expo-linear-gradient

export default function TentangScreen() {
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={['#191919', '#3a3e43']} // Warna gradient yang lebih kalem
        style={styles.backgroundGradient}
      />
      <View style={styles.card}>
        <View style={styles.decoration}>
          <Text style={styles.decorationText}>✨</Text>
        </View>
        <Text style={styles.title}>Tentang Saya</Text>
        <View style={styles.divider} />
        <Text style={styles.paragraph}>
          Saya adalah seorang mahasiswa yang senang belajar hal baru, terutama di bidang teknologi. Saya juga
          tertarik pada pengembangan aplikasi dan desain UI/UX.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e5ec',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject, // Mengisi seluruh layar
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  decoration: {
    backgroundColor: '#e0f7fa',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  decorationText: {
    fontSize: 24,
    color: '#0078d7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#191919',
    marginBottom: 10,
    textAlign: 'center',
  },
  divider: {
    height: 2,
    width: '50%',
    backgroundColor: '#00bcd4',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});
