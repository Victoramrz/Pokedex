import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Aboutpokemon from './src/component/Aboutpokemon';
import Listpokemon from './src/component/Listpokemon';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Listpokemon">
          <Stack.Screen name='Listpokemon' component={Listpokemon} options={{ headerShown: false }}/>
          <Stack.Screen name="Aboutpokemon" component={Aboutpokemon} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

