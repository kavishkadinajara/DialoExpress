import React from 'react';
import { View, Text } from 'react-native';
import tw from 'nativewind';

const Header = ({ title }: { title: string }) => {
  return (
    <View className='p-4 bg-dialogRed'>
      <Text className='text-dialogWhite text-2xl font-bold'>{title}</Text>
    </View>
  );
};

export default Header;
