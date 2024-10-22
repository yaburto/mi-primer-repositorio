import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { 
  calcularAreaCirculo, 
  calcularAreaTriangulo, 
  calcularAreaRectangulo 
} from './ejercicios/areaCalculadora';
import Producto from './ejercicios/Producto'; // Importar la clase Producto
import Trabajador from './ejercicios/Trabajadores'; // Importar las clases Trabajador y Gerente

const App = () => {
  // Estados para las entradas y resultados de áreas
  const [radio, setRadio] = useState('');
  const [baseTriangulo, setBaseTriangulo] = useState('');
  const [alturaTriangulo, setAlturaTriangulo] = useState('');
  const [baseRectangulo, setBaseRectangulo] = useState('');
  const [alturaRectangulo, setAlturaRectangulo] = useState('');
  
  const [resultadoCirculo, setResultadoCirculo] = useState<number | null>(null);
  const [resultadoTriangulo, setResultadoTriangulo] = useState<number | null>(null);
  const [resultadoRectangulo, setResultadoRectangulo] = useState<number | null>(null);
  
  // Estado para mostrar detalles de productos
  const [productos, setProductos] = useState<Producto[]>([]);
  
  // Estado para mostrar detalles de trabajadores
  const [trabajadores, setTrabajadores] = useState<string[]>([]);

  const calcularArea = () => {
    const areaCirculo = calcularAreaCirculo(Number(radio));
    setResultadoCirculo(areaCirculo);

    const areaTriangulo = calcularAreaTriangulo(Number(baseTriangulo), Number(alturaTriangulo));
    setResultadoTriangulo(areaTriangulo);

    const areaRectangulo = calcularAreaRectangulo(Number(baseRectangulo), Number(alturaRectangulo));
    setResultadoRectangulo(areaRectangulo);
  };

  // Método para añadir productos
  const agregarProductos = () => {
    const p1 = new Producto('Manzana', 0.5);
    const p2 = new Producto('Pan', 1.0);
    const p3 = new Producto('Leche', 1.5);
    
    setProductos([p1, p2, p3]);
    
    // Mostrar detalles de los productos en la consola
    p1.mostrarDetalles();
    p2.mostrarDetalles();
    p3.mostrarDetalles();
  };

  // Método para gestionar trabajadores
  const agregarTrabajadores = () => {
    const t1 = new Trabajador('Juan', 3000);
    const t2 = new Trabajador('María', 2500);
    const g1 = new Gerente('Carlos', 5000, 'Ventas');
    const g2 = new Gerente('Laura', 5500, 'Marketing');

    // Almacenar detalles de los trabajadores en el estado
    setTrabajadores([
      t1.mostrarDetalles(),
      t2.mostrarDetalles(),
      g1.mostrarDetalles(),
      g2.mostrarDetalles()
    ]);

    // Mostrar detalles de los trabajadores en la consola
    t1.mostrarDetalles();
    t2.mostrarDetalles();
    g1.mostrarDetalles();
    g2.mostrarDetalles();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>¡Hola Mundo!</Text>

      {/* Calculadora de Áreas */}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Calculadora de Áreas</Text>
      
      {/* Área del círculo */}
      <Text>Cálculo de área del círculo</Text>
      <TextInput 
        placeholder="Ingresa el radio" 
        value={radio} 
        onChangeText={setRadio} 
        keyboardType="numeric" 
      />
      <Button title="Calcular Área del Círculo" onPress={calcularArea} />

      {resultadoCirculo !== null && (
        <Text>Área del círculo: {resultadoCirculo}</Text>
      )}
      
      {/* Área del triángulo */}
      <Text>Cálculo de área del triángulo</Text>
      <TextInput 
        placeholder="Ingresa la base" 
        value={baseTriangulo} 
        onChangeText={setBaseTriangulo} 
        keyboardType="numeric" 
      />
      <TextInput 
        placeholder="Ingresa la altura" 
        value={alturaTriangulo} 
        onChangeText={setAlturaTriangulo} 
        keyboardType="numeric" 
      />
      <Button title="Calcular Área del Triángulo" onPress={calcularArea} />

      {resultadoTriangulo !== null && (
        <Text>Área del triángulo: {resultadoTriangulo}</Text>
      )}
      
      {/* Área del rectángulo */}
      <Text>Cálculo de área del rectángulo</Text>
      <TextInput 
        placeholder="Ingresa la base" 
        value={baseRectangulo} 
        onChangeText={setBaseRectangulo} 
        keyboardType="numeric" 
      />
      <TextInput 
        placeholder="Ingresa la altura" 
        value={alturaRectangulo} 
        onChangeText={setAlturaRectangulo} 
        keyboardType="numeric" 
      />
      <Button title="Calcular Área del Rectángulo" onPress={calcularArea} />

      {resultadoRectangulo !== null && (
        <Text>Área del rectángulo: {resultadoRectangulo}</Text>
      )}
      
      {/* Botón para agregar productos */}
      <Button title="Agregar Productos" onPress={agregarProductos} />

      {/* Mostrar productos */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Productos:</Text>
      {productos.map((producto, index) => (
        <Text key={index}>{`Producto: ${producto.nombre}, Precio: $${producto.precio}`}</Text>
      ))}

      {/* Botón para agregar trabajadores */}
      <Button title="Agregar Trabajadores" onPress={agregarTrabajadores} />

      {/* Mostrar trabajadores */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Trabajadores:</Text>
      {trabajadores.map((detalles, index) => (
        <Text key={index}>{detalles}</Text>
      ))}
    </View>
  );
};

export default App;
