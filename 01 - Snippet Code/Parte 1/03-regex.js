// Este regex debe validar que un string sea un correo electrónico válido.

function validarCorreo() {
   let tuRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/; // Agrega tu regex
   return tuRegex;
}

module.exports = validarCorreo;
