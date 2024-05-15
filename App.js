import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MaioAmareloScreen from './screens/MaioAmareloScreen';
import EventosScreen from './screens/EventosScreen';
import DicasScreen from './screens/DicasScreen';
import ContatoScreen from './screens/ContatoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Maio Amarelo' }} />
        <Stack.Screen name="MaioAmarelo" component={MaioAmareloScreen} options={{ title: 'O que é o Maio Amarelo?' }} />
        <Stack.Screen name="Eventos" component={EventosScreen} options={{ title: 'Eventos e Atividades' }} />
        <Stack.Screen name="Dicas" component={DicasScreen} options={{ title: 'Dicas de Segurança' }} />
        <Stack.Screen name="Contato" component={ContatoScreen} options={{ title: 'Contato' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
