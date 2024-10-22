// Clase para manejar la validación de contraseñas
class ValidadorDeContrasena {
    constructor(password) {
        this.password = password;
        this.longitudMinima = 8;
        this.regexMayuscula = /[A-Z]/;
        this.regexNumero = /[0-9]/;
        this.regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/;
        this.esValida = true;
    }

    // Método para validar la contraseña
    validar() {
        if (this.password.length < this.longitudMinima) {
            console.log("Debe tener al menos 8 caracteres.");
            this.esValida = false;
        }

        if (!this.regexMayuscula.test(this.password)) {
            console.log("Debe contener al menos una letra mayúscula.");
            this.esValida = false;
        }

        if (!this.regexNumero.test(this.password)) {
            console.log("Debe contener al menos un número.");
            this.esValida = false;
        }

        if (!this.regexEspecial.test(this.password)) {
            console.log("Debe contener al menos un carácter especial.");
            this.esValida = false;
        }

        if (this.esValida) {
            alert("¡La contraseña es válida!");
        } else {
            alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles");
        }
    }
}

// Función para solicitar la contraseña y validarla
function solicitarContrasena() {
    let password = prompt("Ingresa una contraseña:");
    let validador = new ValidadorDeContrasena(password);
    validador.validar();
}

// Ejecutar el programa
solicitarContrasena();
