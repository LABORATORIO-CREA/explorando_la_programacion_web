puntajeJugador = 0;
puntajeComputadora = 0;
entrada = 0;
opcionUsuario1 = "";
opcionUsuario2 = "";
const marcador_usuario = document.getElementById("marcador-usuario");
const marcador_computador = document.getElementById("marcador-computador");
const marcador = document.querySelector(".marcador");
const resultado = document.querySelector(".resultado > p");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const reiniciar = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

function jugar(opcionUsuario1, opcionUsuario2) {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const opcionComputadora = opciones[numeroAleatorio];

    switch (opcionUsuario1 + opcionUsuario2) {
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
            ganar(opcionUsuario1, opcionUsuario2);
            break;
        case 'PiedraPapel':
        case 'PapelTijera':
        case 'TijeraPiedra':
            perder(opcionUsuario1, opcionUsuario2);
            break;
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijeraTijera':
            empatar(opcionUsuario1, opcionUsuario2);
            break;
    }
}

function ganar(opcionUsuario, opcionUsuario2) {
    puntajeJugador++;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `${opcionUsuario} vence a ${opcionUsuario2}. Ganaste el jugador 1!`;
    entrada = 0;
    opcionUsuario1 = "";
    opcionUsuario2 = "";
    mensaje.innerHTML = "A jugar nuevamente!";


}

function perder(opcionUsuario, opcionUsuario2) {
    puntajeComputadora++;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `${opcionUsuario} pierde ante ${opcionUsuario2}. Ganó el jugador 2!`;
    entrada = 0;
    opcionUsuario1 = "";
    opcionUsuario2 = "";
    mensaje.innerHTML = "A jugar nuevamente!";


}

function empatar(opcionUsuario, opcionUsuario2) {
    resultado.innerHTML = `${opcionUsuario} es igual a ${opcionUsuario2}. Empate!`;
    entrada = 0;
    opcionUsuario1 = "";
    opcionUsuario2 = "";
    mensaje.innerHTML = "A jugar nuevamente!";

}


function validarJugadas() {
    if (opcionUsuario1 !== "" && opcionUsuario2 !== "") {
        jugar(opcionUsuario1, opcionUsuario2);
    }
}


function restart(){
    puntajeJugador = 0;
    puntajeComputadora = 0;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `Juego reiniciado`;
}

piedra.addEventListener('click', function() {
    if (entrada == 0) {
        opcionUsuario1 = 'Piedra';
        entrada += 1;
        mensaje.innerHTML = "Jugador 2 ahora es tu turno!";
    } else {
        opcionUsuario2 = 'Piedra';
        entrada += 1;
    }
    validarJugadas();
});

papel.addEventListener('click', function() {
    if (entrada == 0) {
        opcionUsuario1 = 'Papel';
        entrada += 1;
        mensaje.innerHTML = "Jugador 2 ahora es tu turno!";
    } else {
        opcionUsuario2 = 'Papel';
        entrada += 1;
    }
    validarJugadas();
});

tijera.addEventListener('click', function() {
    if (entrada == 0) {
        opcionUsuario1 = 'Tijera';
        entrada += 1;
        mensaje.innerHTML = "Jugador 2 ahora es tu turno!";
    } else {
        opcionUsuario2 = 'Tijera';
        entrada += 1;
    }
    validarJugadas();
});

reiniciar.addEventListener('click', function() {
    puntajeJugador = 0;
    puntajeComputadora = 0;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `Juego reiniciado`;
    opcionUsuario1 = "";
    opcionUsuario2 = "";
    entrada = 0;
    mensaje.innerHTML = "Jugador 1 elige!";
});


