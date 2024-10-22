import React from 'react';
import { Text, View, Button } from 'react-native';
import { iniciarCalculos } from '../ejercicios/areaCalculadora'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <View>
            <Text>Hola Mundo!</Text>
            <Button title="Calcular Áreas" onPress={iniciarCalculos} />
        </View>
    );
};

export default App;
