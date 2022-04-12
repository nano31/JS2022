//muestra en la consola el mensaje escrito en el input
function enviar(){
    console.log(document.getElementById("texto").value);
}

//mueve el texto que se encuentra dentro del input texto2, hacia el input texto3
function enviar2(){
    let aux = document.getElementById("texto2").value;
    document.getElementById("texto2").value = " ";
    document.getElementById("texto3").value = aux;
}