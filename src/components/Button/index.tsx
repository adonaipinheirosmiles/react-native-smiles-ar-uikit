import React, { memo } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button = memo(({ text, style, ...params }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, style])}
      activeOpacity={0.7}
      {...params}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
});
