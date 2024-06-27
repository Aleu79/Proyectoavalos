// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
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
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Escribe una palabra"
      />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default App;
