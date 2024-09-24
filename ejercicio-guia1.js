function contarCaracteres() {
    const texto = document.getElementById("inputTexto").value;
    const numeroDeCaracteres = texto.length;
    document.getElementById("resultado").innerText = `La oración ingresada es: "${texto}" y tiene ${numeroDeCaracteres} caracteres.`;
}
