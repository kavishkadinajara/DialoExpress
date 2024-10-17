import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './index'; // Screen for Home
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Custom Badge Component
const Badge = ({ count }: { count: number }) => {
  if (count <= 0) return null; // Don't render if count is 0 or negative
  return (
    <View className="absolute -right-3 -top-1 bg-rose-500 w-5 h-5 rounded-full justify-center items-center">
      <Text className="text-white text-xs font-bold">{count}</Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap | undefined;

          if (route.name === 'Home') {
            iconName = 'home';
          } 
          // Add more routes here if needed

          return (
            <View style={{ position: 'relative' }}>
              <Ionicons name={iconName} size={size} color={color} />
              {/* Example badge; replace 5 with dynamic count */}
              {route.name === 'Home' && <Badge count={5} />} 
            </View>
          );
        },
        tabBarActiveTintColor: '#ff4757', // Modern red for active tab
        tabBarInactiveTintColor: '#b0b0b0', // Soft gray for inactive tab
        tabBarStyle: {
          backgroundColor: '#1c1c1c', // Dark background for the tab bar
          borderTopWidth: 0, // Remove top border for a sleek look
          height: 60, // Increase height for larger tabs
          paddingBottom: 8, // Padding to lift icons
        },
        headerShown: false, // Hide the header
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Custom label style
        }}
      />
      {/* Add more Tab.Screen components for additional screens */}
    </Tab.Navigator>
  );
};

export default TabLayout;
