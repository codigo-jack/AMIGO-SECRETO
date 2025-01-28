// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);

    // Agregar el nuevo nombre al array
    amigos.push(texto);

    // Agregar el nuevo nombre al array
    elementoHTML.innerHTML = amigos.join("<br>");
    return;
}

function agregarAmigo(){
    //Obtener el nombre ingresado 
    let nombreAmigo = document.getElementById('amigo').value;
    
    // Expresión regular para permitir solo letras (mayúsculas y minúsculas)
    let registro = /^[A-Za-záéíóúÁÉÍÓÚÑñ]+$/;

    /*Aca comparamos si el nombre del amigo es igual a vacio
    y además eliminamos los espacios vacios al inicio y al final
    del texto con trim()
    */
    if (nombreAmigo.trim() == '') {
        alert("Porfavor ingresa un nombre");
    }else if (!registro.test(nombreAmigo)) {
        alert("Solo se permiten letras. Por favor ingresa un nombre válido.");
    } else {
        // Si pasa la validación, agregamos el nombre a la lista     
        asignarTextoElemento('#listaAmigos', nombreAmigo); 
    }
    limpiarInput();
    return;
}

function sortearAmigo() {  
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Mostrar el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    document.getElementById('nuevo').removeAttribute('disabled');
    //listadoNuevo();
}

function limpiarInput() {
    document.querySelector('#amigo').value = "";
}

function listadoNuevo(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    limpiarInput();
    document.querySelector('#nuevo').setAttribute('disabled','true');
    return;
}