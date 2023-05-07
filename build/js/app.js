// Variables
const burger = document.querySelector('.burger');
const burgerI = document.querySelector('.burgerI');
const navegacion = document.querySelector('.navegacion');

// Eventos
eventListeners();
function eventListeners() {
    burger.addEventListener('click', cambiarDisplay);
}


// Funciones 
function cambiarDisplay(e) {
    e.preventDefault();
    
    if(navegacion.classList.contains('navegacion__activo')){
        navegacion.classList.add('navegacion__noactivo')
        navegacion.classList.remove('navegacion__activo')
    } else {
        navegacion.classList.remove('navegacion__noactivo')
        navegacion.classList.add('navegacion__activo')
    }

    if(burger.classList.contains('burger__noactivo')) {
        burger.classList.add('burger__activo')
        burger.classList.remove('burger__noactivo')

        burgerI.classList = 'fa-solid fa-x burgerI';
    } else {
        burger.classList.remove('burger__activo')
        burger.classList.add('burger__noactivo')

        burgerI.classList = 'fa-solid fa-bars burgerI';
    }
}
