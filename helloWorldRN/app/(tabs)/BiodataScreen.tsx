import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BiodataScreen() {
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={['#191919', '#3a3e43']} // Warna gradient yang lebih kalem
        style={styles.backgroundGradient}
      />
      <Text style={styles.title}>Biodata Diri</Text>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Nama:</Text>
            <Text style={styles.value}>Hisyam Irsyad Athallah</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>NIM:</Text>
            <Text style={styles.value}>222505039</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Prodi:</Text>
            <Text style={styles.value}>Sistem Informasi</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f6f9',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject, // Gradient latar belakang
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    width: '90%',
    maxWidth: 360,
    alignItems: 'center',
  },
  infoContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    flex: 1,
    textAlign: 'left',
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    flex: 2,
    backgroundColor: '#f0f4f8',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});
