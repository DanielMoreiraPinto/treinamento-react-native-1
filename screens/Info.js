import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default function Info({navigation, route}){
    const [textoDoHomescreen, setTextoDoHomescreen] = React.useState({});
    const [image, setImage] = React.useState(require('../assets/images/blankImage.png'));

    const _getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('É necessário permissões ao rolo da câmera para ver essa tela.');
            }
        }
    };

    React.useEffect(() => {
        setTextoDoHomescreen(route.params.meutexto);
        _getPermissionAsync();
    }, [])

    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(require(result.uri));
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.imageArea}
            >
                <Image
                    style={styles.profileImage}
                    source={image}
                />
            </TouchableOpacity>
            <View style={styles.cardContainer}>
                <Text style={styles.title}> Cartão do Estudante </Text>
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

    imageArea: {

    },

    profileImage: {
        width: 100,
        height: 100
    }
});