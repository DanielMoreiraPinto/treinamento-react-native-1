import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Info({navigation, route}){
    const [textoDoHomescreen, setTextoDoHomescreen] = React.useState('');

    React.useEffect(() => {
        setTextoDoHomescreen(route.params.meutexto);
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {textoDoHomescreen}
            </Text>
            <TouchableOpacity
            style={styles.button} 
            onPress={() => navigation.navigate("homescreen")} > 
            <Text style={styles.buttonText}> Voltar ao Principal </Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 16
    },

    button: {
        padding: '3%',
        backgroundColor: '#355f33',
        borderRadius: 10
    },

    buttonText: {
        color: '#FFFFFF'
    }
});