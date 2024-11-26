import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

export default function HobiScreen() {
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={['#191919', '#3a3e43']} // Warna gradient yang lebih kalem
        style={styles.backgroundGradient}
      />
      <Text style={styles.title}>Hobi</Text>

      {/* Kontainer untuk card */}
      <View style={styles.cardContainer}>
        {/* Card pertama untuk Bermain Game */}
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/gaming.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Gaming</Text>
        </TouchableOpacity>

        {/* Card kedua untuk Nonton Film */}
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/film.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Nonton Film</Text>
        </TouchableOpacity>

        {/* Card ketiga untuk Fotografi */}
        <TouchableOpacity style={styles.card}>
          <Image source={require('@/assets/images/fotografi.jpg')} style={styles.cardImage} />
          <Text style={styles.value}>Fotografi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject, // Mengisi seluruh layar
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffff',
    marginBottom: 20,
    zIndex: 1, // Pastikan judul berada di atas gradient
  },
  cardContainer: {
    flexDirection: 'row', // Menyusun card dalam satu baris
    flexWrap: 'wrap', // Card akan pindah ke baris berikutnya jika ada ruang
    justifyContent: 'space-evenly', // Memberikan jarak yang merata antar card
    width: '100%', // Menggunakan lebar penuh untuk container
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 15,
    width: '40%', // Mengurangi lebar card agar lebih kecil
    alignItems: 'center',
    zIndex: 1,
  },
  cardImage: {
    width: '100%', // Membuat gambar mengikuti lebar card
    height: 150, // Meningkatkan tinggi gambar
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover', // Membuat gambar menutupi area tanpa distorsi
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
