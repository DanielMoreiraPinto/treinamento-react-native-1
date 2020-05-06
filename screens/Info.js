import * as React from 'react';
import {Text, View} from 'react-native';

export default function Info({navigation, route}){
    const [textoDoHomescreen, setTextoDoHomescreen] = React.useState('');

    React.useEffect(() => {
        setTextoDoHomescreen(route.params.meutexto);
    }, [])

    return(
        <View>
            <Text>
                {textoDoHomescreen}
            </Text>
        </View>
    )
}