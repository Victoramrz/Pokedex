import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Pokemonbox(/*{navigation},*/props){
    const receiveData = props.data;
    const onPressHandler = () => {
        //navigation.navigate('Aboutpokemon', {data: 'bulbasaur'})
    };
    return(
        <TouchableOpacity onPress={onPressHandler}>
            <View style={{ marginHorizontal: '2.5%'}}>
                <Image style={{width:80 , height:80 }} source={{uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}}/>
                <Text>Nº001</Text>
                <Text>{receiveData}</Text>
            </View>
        </TouchableOpacity>  
    );
}
