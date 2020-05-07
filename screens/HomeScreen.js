import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function HomeScreen({navigation}) {
  const [textValue, setTextValue] = React.useState('');

  return (
    //preferi não usar forms, não por dificuldade
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Home Screen</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            value={textValue}
            placeholder="Nome"
            onChangeText={text => setTextValue(text)}
          />
          <TextInput
            style={styles.input}
            value={textValue}
            placeholder="Idade"
            onChangeText={text => setTextValue(text)}
          />
        </View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  formContainer: {
    width: '95%',
    height: '80%',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 24,
  },

  button: {
    backgroundColor: '#323f33',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  textButton: {
    color:'white',
  },

  input: {
    backgroundColor: '#e6e1e1',
    flex: 1,
    borderRadius: 8,
    padding: '8%',
    marginHorizontal: 5
  }
})