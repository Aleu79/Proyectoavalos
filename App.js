// App.js
import React, { useState } from 'react';
import { View,Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Importamos la configuracion de firestore

const App = () => {
  const [text, setText] = useState('');

  const handleSave = async () => {
    if (text.trim() === '') {
      Alert.alert('Error', 'El campo no puede estar vacío.');
      return;
    }

    try {
      // esto es para guardar la palabra en firestore
      const docRef = await addDoc(collection(firestore, 'palabras'), { palabra: text });
      
      // aca imprimimmos en la consola la palabra guardada 
      console.log(`Palabra guardada: ${text}`);
    
      // Muestra una alerta 
      Alert.alert('Éxito', 'Palabra guardada exitosamente.');
      
      // Limpia el campo de texto
      setText('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al guardar la palabra.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingresa una palabra</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Palabra"
      />
      <TouchableOpacity
        onPress={handleSave}
        style={styles.boton}
        >
        <Text style={styles.texto}>Guardar</Text>
      </TouchableOpacity> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontStyle: 'bold',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    padding: 10,
    paddingStart: 20,
    borderRadius: 35,
    marginTop: 20, 
    width: '80%',
    backgroundColor: '#ffff',
  },
  boton: {
    marginTop: 20,
    borderRadius: 35,
    width: '50%',
    backgroundColor: '#2596be',
    alignItems: 'center',
    padding: 8,
  },
  texto:{
    color: '#f1f1f1',
    fontSize: 15,
  }
});

export default App;
