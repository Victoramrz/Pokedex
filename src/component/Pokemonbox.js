import React from "react";
import { Text, View, Image } from "react-native";

export default function Pokemonbox(){
    return(
        <View style={{ marginHorizontal: '2.5%'}}>
            <Image style={{width:80 , height:80 }} source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}}/>
            <Text>Nº001</Text>
            <Text>Bulbasur</Text>
        </View>  
    );
}