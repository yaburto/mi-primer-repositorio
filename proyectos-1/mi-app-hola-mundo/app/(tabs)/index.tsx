import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { calcularAreaCirculo, calcularAreaTriangulo, calcularAreaRectangulo } from './ejercicios/areaCalculadora';

const App = () => {
    const [radio, setRadio] = useState('');
    const [baseTriangulo, setBaseTriangulo] = useState('');
    const [alturaTriangulo, setAlturaTriangulo] = useState('');
    const [baseRectangulo, setBaseRectangulo] = useState('');
    const [alturaRectangulo, setAlturaRectangulo] = useState('');
    const [resultadoCirculo, setResultadoCirculo] = useState(null);
    const [resultadoTriangulo, setResultadoTriangulo] = useState(null);
    const [resultadoRectangulo, setResultadoRectangulo] = useState(null);

    const calcularCirculo = () => {
        const area = calcularAreaCirculo(parseFloat(radio));
        setResultadoCirculo(area);
    };

    const calcularTriangulo = () => {
        const area = calcularAreaTriangulo(parseFloat(baseTriangulo), parseFloat(alturaTriangulo));
        setResultadoTriangulo(area);
    };

    const calcularRectangulo = () => {
        const area = calcularAreaRectangulo(parseFloat(baseRectangulo), parseFloat(alturaRectangulo));
        setResultadoRectangulo(area);
    };

    return (
        <View>
            <Text>Calculadora de Áreas</Text>

            <Text>Área del Círculo</Text>
            <TextInput
                placeholder="Ingrese el radio"
                value={radio}
                onChangeText={setRadio}
                keyboardType="numeric"
            />
            <Button title="Calcular Área" onPress={calcularCirculo} />
            {resultadoCirculo && <Text>Área: {resultadoCirculo}</Text>}

            <Text>Área del Triángulo</Text>
            <TextInput
                placeholder="Ingrese la base"
                value={baseTriangulo}
                onChangeText={setBaseTriangulo}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Ingrese la altura"
                value={alturaTriangulo}
                onChangeText={setAlturaTriangulo}
                keyboardType="numeric"
            />
            <Button title="Calcular Área" onPress={calcularTriangulo} />
            {resultadoTriangulo && <Text>Área: {resultadoTriangulo}</Text>}

            <Text>Área del Rectángulo</Text>
            <TextInput
                placeholder="Ingrese la base"
                value={baseRectangulo}
                onChangeText={setBaseRectangulo}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Ingrese la altura"
                value={alturaRectangulo}
                onChangeText={setAlturaRectangulo}
                keyboardType="numeric"
            />
            <Button title="Calcular Área" onPress={calcularRectangulo} />
            {resultadoRectangulo && <Text>Área: {resultadoRectangulo}</Text>}
        </View>
    );
};

export default App;
