puntajeJugador = 0;
puntajeComputadora = 0;
const marcador_usuario = document.getElementById("marcador-usuario");
const marcador_computador = document.getElementById("marcador-computador");
const marcador = document.querySelector(".marcador");
const resultado = document.querySelector(".resultado > p");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const reiniciar = document.getElementById("boton");


function jugar(opcionUsuario) {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const opcionComputadora = opciones[numeroAleatorio];

    switch (opcionUsuario + opcionComputadora) {
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
            ganar(opcionUsuario, opcionComputadora);
            break;
        case 'PiedraPapel':
        case 'PapelTijera':
        case 'TijeraPiedra':
            perder(opcionUsuario, opcionComputadora);
            break;
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijeraTijera':
            empatar(opcionUsuario, opcionComputadora);
            break;
    }
}

function ganar(opcionUsuario, opcionComputadora) {
    puntajeJugador++;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `${opcionUsuario} vence a ${opcionComputadora}. Ganaste!`;
}

function perder(opcionUsuario, opcionComputadora) {
    puntajeComputadora++;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `${opcionUsuario} pierde ante ${opcionComputadora}. Perdiste!`;
}

function empatar(opcionUsuario, opcionComputadora) {
    resultado.innerHTML = `${opcionUsuario} es igual a ${opcionComputadora}. Empate!`;
}


function restart(){
    puntajeJugador = 0;
    puntajeComputadora = 0;
    marcador_usuario.innerHTML = puntajeJugador;
    marcador_computador.innerHTML = puntajeComputadora;
    resultado.innerHTML = `Juego reiniciado`;
}

piedra.addEventListener('click', function() {
    jugar('Piedra');
});

papel.addEventListener('click', function() {
    jugar('Papel');
});

tijera.addEventListener('click', function() {
    jugar('Tijera');
});

boton.addEventListener('click', function() {
    restart();
});



