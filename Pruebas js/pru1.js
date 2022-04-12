
var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;
var res;

function sumar(){
    res = parseInt(num1) + parseInt(num2);
    document.getElementById("result").value = res;
}
/** si en uno de los inputs no hay nada de texto, no hace nada */

function restar(){
   res = parseInt(num1) - parseInt(num2);
   document.getElementById("result").value = res;
}

function multiplicar(){
    res = parseInt(num1) + parseInt(num2);
    document.getElementById("result").value = res;
}

function dividir(){
     if (num2 != 0){
         res = parseInt(num1) + parseInt(num2);
         document.getElementById("result").value = res;
     }else{
         console.log("no se puede dividir por cero");
     }
}