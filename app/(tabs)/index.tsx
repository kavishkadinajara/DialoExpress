import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import DialogForm from "@/components/DialogForm";

const HomeScreen = () => {
  return (
    <ScrollView className="flex bg-[#141313] w-full">
      <View className=" p-4">
        <Text className='text-xl text-center font-bold text-rose-100 shadow-lg shadow-rose-600 mt-10 mb-4'>Welcome to Dialog Reload System </Text>
        <DialogForm />
      </View>
    </ScrollView>
  );
};


export default HomeScreen;
