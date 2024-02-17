function cambiarSemaforo() {
    let imagenSemaforo = document.getElementById('imagenSemaforo');
    let colores = ['rojo', 'verde', 'amarillo'];
    let indiceActual = 0;

    function mostrarColor() {
        // Actualizar la imagen del semáforo con el nuevo color
        imagenSemaforo.src = `imagenes/semaforo_${colores[indiceActual]}.png`;
        console.log(`El semáforo está en ${colores[indiceActual]}`);

        // Mover al siguiente color
        indiceActual = (indiceActual + 1) % colores.length;
    }

    // Cambio de color del semáforo cada 3 segundos
    setInterval(mostrarColor, 3000);
}

// Iniciar el semáforo
cambiarSemaforo();
