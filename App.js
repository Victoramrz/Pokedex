import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Navegatorbar from './src/component/Navegatorbar';
import Pokemonbox from './src/component/Pokemonbox';

export default function App() {
  return (
    <View style={styles.container} className = "App">
      <StatusBar style= 'solid'/>
      <Navegatorbar />
      <View style={styles.row}>
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
      </View>
      <View style={styles.row}>
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
      </View>
      <View style={styles.row}>
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
      </View>
      <View style={styles.row}>
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
      </View>
      <View style={styles.row}>
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
        <Pokemonbox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  row: {
    flexDirection: 'row', 
    marginTop: 20
  }
});
