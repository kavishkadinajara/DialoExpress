import { useDialogReload } from '@/hooks/useDialogReload';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

// Custom Animated Button with scale effect and loading state
const AnimatedButton = ({ onPress, isLoading }: { onPress: () => void, isLoading: boolean }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value, { damping: 10, stiffness: 100 }) }],
    };
  });

  const handlePressIn = () => {
    scale.value = 0.95; // Shrink the button on press
  };

  const handlePressOut = () => {
    scale.value = 1; // Return to original size
    onPress(); // Call the onPress function
  };

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isLoading}
        className={`p-4 rounded-lg ${isLoading ? 'bg-gray-400' : 'bg-rose-500'}`} // Disabled style
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className='text-white text-center text-lg font-bold'>Reload</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const DialogForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { reloadDialog } = useDialogReload(); // Custom hook for reload logic

  // Basic validation function
  const validateForm = () => {
    if (!mobileNumber || !amount || !pin) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }
    if (mobileNumber.length < 10 || pin.length < 4) {
      Alert.alert('Error', 'Invalid input. Please check your details.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true); // Start loading state
    try {
      await reloadDialog(mobileNumber, amount, pin); // Trigger reload action
      Alert.alert('Success', 'Reload successful!');
      // Optionally reset fields after success
      setMobileNumber('');
      setAmount('');
      setPin('');
    } catch (error) {
      Alert.alert('Error', 'Reload failed. Please try again.');
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        className="flex-1"
      >
        <View className='p-6 bg-black shadow-lg rounded-xl'>
          <Text className='text-2xl mb-4 text-rose-500 font-semibold text-center'>
            Reload Dialog SIM
          </Text>
          
          {/* Mobile Number Input */}
          <TextInput
            className='border-2 border-gray-500 rounded-lg p-3 text-white mb-4'
            placeholder="Mobile Number"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />

          {/* Amount Input */}
          <TextInput
            className='border-2 border-gray-500 rounded-lg p-3 text-white mb-4'
            placeholder="Amount"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* PIN Input */}
          <TextInput
            className='border-2 border-gray-500 rounded-lg p-3 text-white mb-6'
            placeholder="PIN Number"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={pin}
            onChangeText={setPin}
          />

          {/* Animated Reload Button with Loading Indicator */}
          <AnimatedButton onPress={handleSubmit} isLoading={isLoading} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DialogForm;
