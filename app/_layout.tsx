import React from 'react';
import { DialogProvider } from '../store/dialogContext'; // Import the provider
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { Slot } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure this is imported correctly

const MainLayout: React.FC = () => {
  return (
    <DialogProvider>
      {/* Customize the status bar to match the dark theme */}
      <StatusBar barStyle="light-content" backgroundColor="#1c1b1b" />

      {/* Gradient background */}
      <LinearGradient className='' colors={['#1c1b1b', '#101010']} style={{ flex: 1 }}>
        <SafeAreaView className="flex-1  shadow-2xl shadow-rose-600 px-4">
          
          {/* App Header with shadow and border styling */}
          <View className="border-b-2 border-x-2 border-rose-600 rounded-b-3xl rounded-t-lg mt-2 py-4 mb-1 shadow-md shadow-rose-500">
            <Text className="text-white text-xl text-center font-bold tracking-wide">
              Dialog Reload System
            </Text>
          </View>

          {/* Main content area with slot for routing */}
          <View className="flex-1">
            <Slot />
          </View>

        </SafeAreaView>
      </LinearGradient>
    </DialogProvider>
  );
};

export default MainLayout;
