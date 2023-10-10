import { StyleSheet } from 'react-native';
import type { SeparatorProps } from '.';

export const styles = ({ horizontal, vertical, size }: SeparatorProps) =>
  StyleSheet.create({
    container: {
      height: vertical ? size : 0,
      width: horizontal ? size : 0,
    },
  });
