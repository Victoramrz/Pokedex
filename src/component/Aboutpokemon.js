import React from "react";
import { Text, View, StyleSheet} from "react-native";

function Aboutpokemon({pr}) {
    const name = route.params.data;
    return (
        <View style={styles.container}>
            <Text style={{fontSize:46}}>Hola {name}</Text>
        </View>
    ); 
}
export default Aboutpokemon;
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