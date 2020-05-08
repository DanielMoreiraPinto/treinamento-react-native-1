import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

export default function Info({navigation, route}){
    const [textoDoHomescreen, setTextoDoHomescreen] = React.useState({});

    React.useEffect(() => {
        setTextoDoHomescreen(route.params.meutexto);
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.title}> Cartão do Estudante </Text>
                <TouchableOpacity
                    
                >

                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>
                        Nome:
                    </Text>
                    <Text style={styles.text}>
                        {textoDoHomescreen.nome}
                    </Text>
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Idade:
                    </Text>
                    <Text style={styles.text}>
                        {textoDoHomescreen.idade}
                    </Text>
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Endereço:
                    </Text>
                    <Text style={styles.text}>
                        {textoDoHomescreen.endereco}
                    </Text>
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Universidade:
                    </Text>
                    <Text style={styles.text}>
                        {textoDoHomescreen.universidade}
                    </Text>
                </View>
            </View>
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

    cardContainer: {
        width: '70%',
        height: '50%',
        justifyContent: 'space-between',
        marginVertical: 50
    },

    text: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'green'
    },

    headerText: {
        fontSize: 18,
    },

    title: {
        fontSize: 24,
        alignSelf: 'center'
    },

    button: {
        padding: '3%',
        backgroundColor: '#355f33',
        borderRadius: 10
    },

    buttonText: {
        color: '#FFFFFF'
    },

    image: {
        width: 20,
        height: 20
    }
});