import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MaioAmareloScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O que é o Maio Amarelo?</Text>
      <Text style={styles.text}>
        O Maio Amarelo é uma campanha internacional de conscientização e prevenção de acidentes de trânsito, realizada anualmente durante o mês de maio...
      </Text>
      {/* Adicione mais conteúdo e imagens conforme necessário */}
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

export default MaioAmareloScreen;
