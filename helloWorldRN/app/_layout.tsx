import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import Index from '../app/(tabs)/index';
import BiodataScreen from '../app/(tabs)/BiodataScreen';
import TentangScreen from '../app/(tabs)/TentangScreen';
import HobiScreen from '../app/(tabs)/HobiScreen';
import Todolist from '../app/(tabs)/todolist';
import Kawan from '../app/(tabs)/kawansaya';

// Prevent splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        initialRouteName="Biodata"
        screenOptions={({ navigation }) => ({
          headerShown: true, // Tampilkan Header
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()} // Buka Drawer saat tombol ditekan
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen
          name="Beranda"
          component={Index}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Biodata"
          component={BiodataScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tentang Saya"
          component={TentangScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Hobi"
          component={HobiScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="game-controller" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="To-do list"
          component={Todolist}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
        name="Kawan SeProdi"
        component={Kawan}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} /> // Ikon "people" untuk menggambarkan teman
          ),
        }}
      />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
