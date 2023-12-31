//! Manejar pulsaciones de teclado
function manejarPulsacionesTeclado(callback) {
    document.addEventListener('keydown', function(event) {
        let tecla = event.key.toUpperCase();
        if (tecla.length === 1 && tecla.match(/[A-ZÑ]/i)) { // Si la tecla es una letra
            callback(tecla);
        } else if (tecla === 'BACKSPACE') { // Si la tecla es Backspace
            callback('Backspace');
        } else if (tecla === 'ENTER') { // Si la tecla es Enter
            callback('Enter');
        }
    });
}
//! Uso
manejarPulsacionesTeclado(function(tecla) {
    // Aquí puedes manejar la tecla presionada
    console.log('Tecla presionada:', tecla);
});