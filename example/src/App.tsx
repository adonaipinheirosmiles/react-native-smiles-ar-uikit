import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, Input, Separator } from 'react-native-smiles-ar-uikit';

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder="Digite seu nome" error="Mensagem de erro" />
      <Separator size={16} />
      <Button text="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
