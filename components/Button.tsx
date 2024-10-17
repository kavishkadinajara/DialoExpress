import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'nativewind'; // Tailwind styling

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
  const buttonStyle = variant === 'primary' ? 'bg-dialogRed' : 'bg-gray-500';

  return (
    <TouchableOpacity
      className='p-4 rounded-lg ${buttonStyle} justify-center items-center'
      onPress={onPress}
    >
      <Text className='text-dialogWhite text-lg'>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
