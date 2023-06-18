var player; // Variable para almacenar el objeto del reproductor de video
var currentSecs = 3;

function inicializar()
{
    //Calculamos el total de canciones que hay en la base de datos
    
}

// Función para inicializar el reproductor de video
function initializePlayer() {
    console.log("initializePlayer");
  player = new YT.Player("player", {
    videoId: "U1T_J6Odoqg",
    events: {
      onReady: onPlayerReady
    }
  });
}

// Función para reproducir o pausar el video
function togglePlayPause() {
    console.log("togglePlayPause");
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo(); // Pausa el video si está reproduciendo
    playPauseButton.textContent = "Reproducir"; // Cambia el texto del botón a "Reproducir"
  } else {
    player.playVideo(); // Reproduce el video si está en pausa
    playPauseButton.textContent = "Pausar"; // Cambia el texto del botón a "Pausar"
    setTimeout(function(){
        console.log("currentSecs");
        togglePlayPause();
    }, currentSecs * 1000);
  }
  player.seekTo(0);
}

// Función que se ejecuta cuando el reproductor está listo
function onPlayerReady(event) {
  // Código adicional que deseas ejecutar cuando el reproductor está listo
}

// Función para inicializar el reproductor de video cuando la API de YouTube esté lista
function onYouTubeIframeAPIReady() {
  initializePlayer();
}

// Envuelve el código dentro del evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function() {
  var playPauseButton = document.getElementById("playPauseButton");

  // Asigna el evento de clic al botón para controlar la reproducción y pausa
  playPauseButton.addEventListener("click", togglePlayPause);
  //Espera currentSecs y luego ejecuta la funció
});

document.addEventListener('DOMContentLoaded', function() {
    var aumentaTiempo = document.getElementById("aumentaTiempo");
    aumentaTiempo.addEventListener("click", ()=>currentSecs+=3);
});