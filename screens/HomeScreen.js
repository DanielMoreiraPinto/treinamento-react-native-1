import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function HomeScreen({navigation}) {
  const [textValue, setTextValue] = React.useState({nome: '', idade: '', endereco: '', universidade: ''});

  return (
    //preferi não usar forms, não por dificuldade
    <View style={styles.container}>
      <View style={styles.formContainer}>

        <View style={styles.formElementContainer}>
          <Text style={styles.title}> Cadastro do Estudante </Text>
        </View>

        <View style={[styles.formElementContainer, {flex: 2}]}> 
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.bigInput}
              value={textValue.nome}
              placeholder="Nome"
              onChangeText={text => setTextValue({...textValue, nome: text})}
            />
            <TextInput
              style={styles.input}
              value={textValue.idade}
              placeholder="Idade"
              onChangeText={text => setTextValue({...textValue, idade: text})}
            />
          </View>
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.input}
              value={textValue.endereco}
              placeholder="Endereço"
              onChangeText={text => setTextValue({...textValue, endereco: text})}
            />
          </View>
          <View style={styles.rowContainer}>
            <TextInput
              style={styles.input}
              value={textValue.universidade}
              placeholder="Universidade"
              onChangeText={text => setTextValue({...textValue, universidade: text})}
            />
          </View>
        </View>
        
        <View style={styles.formElementContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  formContainer: {
    width: '95%',
    height: '95%',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  formElementContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
  },

  button: {
    backgroundColor: '#323f33',
    padding: 15,
    borderRadius: 10,
  },

  textButton: {
    color:'white',
  },

  input: {
    backgroundColor: '#e6e1e1',
    flex: 1,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginBottom: 15
  },

  bigInput: {
    backgroundColor: '#e6e1e1',
    flex: 3,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginBottom: 15
  }
})