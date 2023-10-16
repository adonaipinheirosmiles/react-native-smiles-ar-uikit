import React, { memo } from 'react';
import {
  View,
  TextInput,
  Text,
  type TextInputProps,
  StyleSheet,
} from 'react-native';

interface InputProps extends TextInputProps {
  error?: string;
}

import { styles } from './styles';
import { Separator } from '../Separator';

export const Input = memo(({ error, style, ...params }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={StyleSheet.flatten([styles.textInput, style])}
        {...params}
      />
      {error && (
        <>
          <Separator size={5} vertical />
          <Text style={styles.errorMessage}>* {error}</Text>
        </>
      )}
    </View>
  );
});
