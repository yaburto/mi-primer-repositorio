function verificarContrasena() {
    const contrasena = document.getElementById("inputPassword").value;
    const tieneLongitud = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneEspecial = /[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(contrasena);

    if (tieneLongitud && tieneMayuscula && tieneNumero && tieneEspecial) {
        document.getElementById("resultado").innerText = "Contraseña válida.";
    } else {
        document.getElementById("resultado").innerText = "La contraseña no cumple con los requisitos de seguridad.";
    }
}
