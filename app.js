let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = {};

function asignarElemento(elemento, texto) {
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroUsuario === numeroSecreto);// compara los tipos de datos que sean iguales
    if (numeroUsuario === numeroSecreto) {
        asignarElemento('p', `Acertaste al número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroUsuario > numeroSecreto) {
             asignarElemento('p', 'Número secreto es menor');
        }else{
            asignarElemento('p','Número secreto es mayor')
        }
        intentos++;
        limpiarCaja();  
    } 
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
        return numeroSecreto;
}

function condicionesIniciales() {
    asignarElemento('h1',"Juego del número secreto");
    asignarElemento('p',"Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //paso uno limpiar caja
    limpiarCaja();
    // indicar mensaje de inicio
    // generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();