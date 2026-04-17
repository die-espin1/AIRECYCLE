document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('bgVideo');
    var bottle = document.querySelector('.plastic');
    var textEs = document.querySelector('.text-es');
    var textEn = document.querySelector('.text-en');
  
    // Oculta el plástico y el texto al principio
    bottle.style.opacity = '0';
    textEs.style.opacity = '0';
    textEn.style.opacity = '0';
  
    video.addEventListener('ended', function() {
      // Cuando el video ha terminado de reproducirse
      bottle.style.opacity = '1'; // Muestra el plástico
      textEs.style.opacity = '1'; // Muestra el texto en español
      textEn.style.opacity = '1'; // Muestra el texto en inglés
    });
  });
  