let palabraAleatoria;
let filaActual = 0;
function juego(){
    palabraAleatoria = elejirPalabra();
    let tablaJuego = document.getElementById("tablaJuego");
    tablaJuego.innerHTML = ''; // Borrar la tabla
    let num = 0;
    for (let i = 0; i < 6; i++){
        let fila = document.createElement("tr");
        for (let j = 0; j < 5; j ++ ){
            let celda = document.createElement("td");
            celda.id = 'celda' + num; 
            fila.appendChild(celda);
            num +=1;        }
        tablaJuego.appendChild(fila);
    }
}
function selectorFila(){
    let celdasDeLaFila;
    if(filaActual == 0){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(1) td');
    }
    else if(filaActual ==1){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(2) td');
    }
    else if(filaActual ==2){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(3) td');
    }
    else if(filaActual ==3){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(4) td');
    }
    else if(filaActual ==4){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(5) td');
    }
    else if(filaActual ==5){
        return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(6) td');
    }
    else if(filaActual > 5){
        filaActual = 0; return celdasDeLaFila = tablaJuego.querySelectorAll('tr:nth-child(1) td');
    }
}

function elejirPalabra(){
    const palabras = ["valor","pesca","calza","volar"];
    let indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

function presionarTecla(tecla){
    if (tecla == "Backspace") {
        let idCelda = queCeldaPintar();
        if(idCelda != -1){
            idCelda = Number(idCelda.replace('celda', ''));
            if (idCelda ==0 || idCelda ==5 || idCelda ==10 || idCelda ==15 || idCelda ==20 || idCelda ==25){return;}
            else{
            idCelda -= 1;
            let celda = document.querySelector('#celda' + idCelda);
            celda.textContent = "";}}
        else if (idCelda == -1) {
            let celda;
            switch(filaActual){
                case 0:
                    idCelda = 4;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
                case 1:
                    idCelda = 9;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
                case 2:
                    idCelda = 14;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
                case 3:
                    idCelda = 19;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
                case 4:
                    idCelda = 24;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
                case 5:
                    idCelda = 29;
                    celda = document.querySelector('#celda' + idCelda);
                    celda.textContent = "";
                    break;
            }
        
    }}
    else if(tecla =="Enter"){
        comprovarPalabra(palabraAleatoria);
        filaActual +=1;
    }
    else{
        let idCelda = queCeldaPintar();
        if (idCelda == -1) {
            return; // Si todas las celdas están llenas, no hay nada que pintar
        }
        let celda = document.querySelector('#' + idCelda);
        celda.textContent = tecla;
    }
}

function queCeldaPintar(){
    let celdas = selectorFila();
    let numCeldas = celdas.length;
    for(let i = 0; i < numCeldas; i++){
        let celda = celdas[i];
        let contenido = celda.textContent;
        if (contenido == ""){
            return celda.id;
        }
    }
    return -1;
}



function comprovarPalabra(palabraAleatoria){
    let arrayPalabra = palabraAleatoria.split("");
    let linea = selectorFila();
    let respuesta = [];
    
    for(let element of linea){
        respuesta.push(element.textContent);
    }
    palabraAleatoria = arrayPalabra.join('');
    respuesta = respuesta.join('');
    if (palabraAleatoria == respuesta){
        alert("CORRECTO!");
        juego();
    }
    else{
        if(filaActual == 5){
            alert("Has perdido, la palabra era: " + palabraAleatoria);
            juego();
        }else{
        alert("La palabra no es correcta, vuelve a intentarlo!")}
        
    }
}

juego();