import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const ContatoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>
        Tem alguma dúvida ou sugestão? Entre em contato conosco!
      </Text>
      <TextInput style={styles.input} placeholder="Seu nome" />
      <TextInput style={styles.input} placeholder="Seu e-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Sua mensagem" multiline />
      <Button title="Enviar" color="#FFA500" onPress={() => alert('Mensagem enviada!')} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ContatoScreen;
