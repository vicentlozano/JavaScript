const path = require('path');

module.exports = {
  mode: 'development',
  entry: './wordle/interacciones.js', // El archivo de entrada de tu aplicación
  output: {
    filename: 'main.js', // El nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // La carpeta donde se guardará el archivo de salida
  },
};