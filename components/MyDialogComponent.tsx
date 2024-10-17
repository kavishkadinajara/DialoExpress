// components/MyDialogComponent.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDialogContext } from '../store/dialogContext';

const MyDialogComponent = () => {
  const { isOpen, openDialog, closeDialog } = useDialogContext();

  return (
    <View>
      <Button title="Open Dialog" onPress={openDialog} />
      {isOpen && (
        <View>
          <Text>This is the dialog content.</Text>
          <Button title="Close Dialog" onPress={closeDialog} />
        </View>
      )}
    </View>
  );
};

export default MyDialogComponent;
