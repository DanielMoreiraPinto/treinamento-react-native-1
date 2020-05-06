import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function HomeScreen({navigation}) {
  const [textValue, setTextValue] = React.useState('');

  // const handleTextChange = (text) => {
  //   setTextValue(text);
  // }

  // React.useEffect(() => {
  //   setTextValue(textValue.toUpperCase());
  // }, [textValue])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {navigation.navigate("infoscreen", 
          {
            meutexto: textValue
          }
        )}}
      >
        <Text style={styles.textButton}>Ir para informações</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={textValue}
        placeholder="Digite alguma coisa"
        onChangeText={text => setTextValue(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize:24,
  },
  button: {
    backgroundColor: '#323f33',
    padding:15,
    borderRadius:10,
    marginBottom: 10
  },
  textButton: {
    color:'white',
  },
  input: {
    backgroundColor: 'grey',
    width:'90%',
    borderRadius:8,
    padding:11 
  }
})