// Variables
const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#correo');
const inputMensaje = document.querySelector('#mensaje');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');

let email = {
    nombre: '',
    correo: '',
    mensaje: ''
}

// Eventos
eventListeners();
function eventListeners() {
    inputNombre.addEventListener('blur', validarCampo);
    inputEmail.addEventListener('blur', validarCampo);
    inputMensaje.addEventListener('input', validarCampo);

    formulario.addEventListener('submit', enviarForm);
}

// Funciones
function validarCampo(e) {
    if(e.target.value.trim() === '') {
        mostrarAlerta('Todos los campos son obligatorios');
        email[e.target.id] = '';
        comprobarForm();
        return;
    }

    if(e.target.id === 'correo' && !validarEmail(e.target.value)) {
        mostrarAlerta('El email no es válido');
        email[e.target.id] = '';
        comprobarForm();
        return;
    }   

    limpiarAlerta();

    email[e.target.id] = e.target.value.trim().toLowerCase();

    // Comprobar que el objeto datosForm esté lleno y cambia el disabled del boton
    comprobarForm();
}

function mostrarAlerta(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');

    const existe = formulario.querySelector('.alerta');

    if(existe) {
        existe.remove();
    }

    formulario.insertBefore(alerta, btnSubmit);
}

function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email);
    return resultado;
}

function limpiarAlerta() {
    // Comprueba si ya existe una alerta en ese input, y si ya existe la elimina antes de insertar la nueva
    const alerta = formulario.querySelector('.alerta');
    if(alerta) {
        alerta.remove();
    }
}

function comprobarForm() {
    // Si uno de los valores del objeto datosForm incluye un espacio vacío, añadimos la clase de opacity y el disabled true
    if( Object.values(email).includes('') ) {
        btnSubmit.classList.add("formulario__boton--opacity");
        btnSubmit.disabled = true;
        return;
    } 
        btnSubmit.classList.remove("formulario__boton--opacity");
        btnSubmit.disabled = false;
}

function enviarForm() {

    spinner.classList.add('spinner__contenedor');
    spinner.classList.remove('hidden');

    // Quitamos el spinner 3.5s después y reiniciamos el formulario
    setTimeout(() => {
        spinner.classList.remove('spinner__contenedor');
        spinner.classList.add('hidden');

        email.nombre = '';
        email.correo = '';
        email.mensaje = '';

        comprobarForm();
        formulario.reset();

        const alertaExito = document.createElement('p');
        alertaExito.classList.add('exito');
        alertaExito.textContent = 'Tu mensaje se ha enviado correctamente';

        formulario.insertBefore(alertaExito, btnSubmit);

        setTimeout(() => {
            alertaExito.remove();
        }, 3500);
    }, 3500);
}