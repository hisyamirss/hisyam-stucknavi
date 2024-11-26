import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, Animated } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  // Create a reference to the animated value
  const handAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create the animation loop
    const waveAnimation = () => {
      Animated.sequence([
        Animated.timing(handAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(handAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => waveAnimation()); // Restart the animation once finished
    };

    // Start the wave animation
    waveAnimation();
  }, [handAnimation]);

  // Interpolate the animated value to create a "wave" effect on rotation
  const handRotation = handAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg'], // The hand will rotate between 0 and 20 degrees
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/duck.jpg')}
          style={styles.headerImage}  // Updated image style
        />
      }>
      {/* Bagian Header */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>Welcome to My Blog!</ThemedText>
        
        {/* Animated hand image */}
        <Animated.Image
          source={require('@/assets/images/wavee.png')}  // Replace with your waving hand image
          style={[styles.handImage, { transform: [{ rotate: handRotation }] }]}
        />
      </ThemedView>

      {/* Other content remains the same */}
      <ThemedView style={styles.photoContainer}>
        <ThemedText type="subtitle" style={styles.photoTitle}>
          Foto Profil
        </ThemedText>
        <Image
          source={require('@/assets/images/hisyam.jpeg')} // Ganti dengan path foto Anda
          style={styles.profilePhoto}
        />
      </ThemedView>

      <ThemedView style={styles.quotesContainer}>
        <ThemedText type="subtitle" style={styles.quotesTitle}>
          Nasehat
        </ThemedText>
        <ThemedText style={styles.quoteText}>
          "WORK HARD, PLAY HARD, ISTIRAHARD."
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 40, // Memberikan jarak atas
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
  },
  headerImage: {
    width: '100%', // Maintain full width
    height: 200, // Reduced height for better balance
    resizeMode: 'cover', // Ensures the image fills the space without distortion
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  handImage: {
    width: 40, // Adjust size of the hand
    height: 40, // Adjust size of the hand
    marginLeft: 10, // Space between the text and the hand
  },
  photoContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  photoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  profilePhoto: {
    width: 120,  // Maintain a fixed size for the profile photo
    height: 120, // Ensure it's a square
    borderRadius: 60, // Makes it round
    borderWidth: 3,
    borderColor: '#1D3D47',
    marginBottom: 20,
    resizeMode: 'cover', // Keeps the aspect ratio intact
  },
  quotesContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 20,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  quotesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3D47',
    marginBottom: 16,
  },
  quoteText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
    fontStyle: 'italic',
  },
});
