import React, { memo } from 'react';
import { View } from 'react-native';
import { styles as defaultStyles } from './styles';

export interface SeparatorProps {
  horizontal?: boolean;
  vertical?: boolean;
  size: number;
}

export const Separator = memo(
  ({ horizontal, vertical, size }: SeparatorProps) => {
    const styles = defaultStyles({ horizontal, vertical, size });
    return <View style={styles.container} />;
  }
);
