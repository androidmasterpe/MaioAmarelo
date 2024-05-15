import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DicasScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dicas de Segurança</Text>
      <Text style={styles.text}>
        Aqui estão algumas dicas importantes para um trânsito mais seguro...
      </Text>
      {/* Adicione uma lista de dicas, infográficos e quizzes */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default DicasScreen;
