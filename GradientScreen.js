import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Asegúrate de que esta dependencia esté instalada

const GradientScreen = () => {
  return (
    <LinearGradient
      // Cambia los colores a tu preferencia
      colors={['#FF5733', '#33FF57']} // Ejemplo de gradiente
      style={styles.gradient}
    >
      <Text style={styles.text}>Texto de Ejemplo</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // Semi-negrita
    color: 'green',
  },
});

export default GradientScreen;
