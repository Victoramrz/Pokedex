import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar} from "react-native";
import axios from "axios";
import Pokemonbox from "./Pokemonbox";
import Navegatorbar from "./Navegatorbar"

export default function Listpokemon({navigation}) {
    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
          const data = response.data;
          const results = data.results;
          setPokemonList(results);
        })
        .catch(error => {
          console.error('Error al obtener datos de la API: ', error);
        });
    }, []);
    return(
        <View style={styles.container} className = "App">
        <StatusBar style= 'solid'/>
        <Navegatorbar />
            <View style={styles.row}>
                {pokemonList.map((pokemon, index) => (
                    <Pokemonbox key={index} data={(pokemon.name)}/>
                ))}
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
    },
  });
  