// areaCalculadora.js

export const calcularAreaCirculo = (radio) => {
    return Math.PI * Math.pow(radio, 2);
};

export const calcularAreaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};

export const calcularAreaRectangulo = (base, altura) => {
    return base * altura;
};
