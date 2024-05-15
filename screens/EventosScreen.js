import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EventosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Eventos e Atividades</Text>
      <Text style={styles.text}>
        Confira todos os eventos e atividades do Maio Amarelo em sua região...
      </Text>
      {/* Adicione uma lista de eventos com detalhes */}
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

export default EventosScreen;
