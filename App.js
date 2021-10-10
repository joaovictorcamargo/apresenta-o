import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Usuario from './src/Usuario';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Sejá bem vindo!</Text>
      <Usuario nome="João Victor Camargo" cargo="Programador" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

