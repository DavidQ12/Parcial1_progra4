document.addEventListener('DOMContentLoaded', function() {
    const contenido = document.getElementById('contenido');
    const header = document.querySelector('header');
  
    contenido.addEventListener('click', function() {
      const nuevoElemento = document.createElement('p');
      nuevoElemento.textContent = '¡Nuevo elemento agregado!';
      
      document.body.appendChild(nuevoElemento);
    });
  
    header.addEventListener('click', function() {
      document.body.style.backgroundColor = getRandomColor();
    });
  
    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });