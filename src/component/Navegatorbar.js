import React from 'react';
import {TextInput, View, Image } from 'react-native';

export default function Navegatorbar() {
    return(
        <View style={{backgroundColor: "#FF3F3F", flexDirection: 'row',borderWidth: 1}}>
            <Image style={{width: 50, height: 50, marginTop: '1.5%'}} source={{uri : 'https://cdn-icons-png.flaticon.com/512/188/188940.png'}}></Image>
            <TextInput style={{width: '80%' ,height: '75%',marginTop: '2%', borderWidth: 1, padding:10, backgroundColor: 'white'}} placeholder= 'Introduzaca el nombre del pokemon'/>
        </View>
    );
}
