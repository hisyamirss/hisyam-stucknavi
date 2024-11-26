import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

// URL API dengan Proxy CORS
const apiURL = 'https://cors-anywhere.herokuapp.com/https://iotikaindonesia.com/dipa/api/mhs.php';

interface Mahasiswa {
  id: string;
  nim: string;
  nama: string;
  kelas: string;
  points: string | null;
}

export default function App() {
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('Fetching data from API...');

      // Mengambil data dari API menggunakan proxy CORS
      const response = await fetch(apiURL);

      // Memeriksa status respons API
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} - ${response.statusText}`);
      }

      // Parsing data dari respons API
      const result = await response.json();
      console.log('Data yang diterima:', result); // Logging data yang diterima dari API

      // Memeriksa apakah data yang diterima berada di dalam objek 'data' dan apakah itu array
      if (result.status === 'success' && Array.isArray(result.data)) {
        const randomData = getRandomItems(result.data, 10); // Ambil 10 item secara acak
        setData(randomData);
      } else {
        setError('Format data tidak valid atau kosong.');
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Log error
      // Menangani error lebih baik
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Terjadi kesalahan jaringan atau server tidak merespons.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk mendapatkan n item secara acak
  const getRandomItems = (arr: Mahasiswa[], numItems: number): Mahasiswa[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  return (
    <LinearGradient
      colors={['#191919', '#3a3e43']} // Warna gradient yang lebih kalem
      style={styles.container}
    >
      <Text style={styles.title}>
        Berikut adalah 10 orang kawan saya di Prodi SI secara random
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id} // Gunakan `id` sebagai key unik
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text}>NIM: {item.nim}</Text>
              <Text style={styles.text}>Nama: {item.nama}</Text>
              <Text style={styles.text}>Kelas: {item.kelas}</Text>
              <Text style={styles.text}>Points: {item.points || 'Tidak tersedia'}</Text>
            </View>
          )}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffff', // Warna teks untuk judul
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    width: '100%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
