var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3, 567, 98, 45, 480, 324, 546, 56 ];
var sum = 0;

//utilizo un acumulador y una variable que tenga el valor actual que se esta procesando.
//el acumulador va guardando el valor de la suma, se inicializa con el valor que se quiere
//devolver si el array no tiene elementos
function reduce(array = [], binaryOperation, initialValue){  
   let acc = initialValue;
   array.forEach((cur) => (acc, binaryOperation(acc,cur)));
   return acc;
}

var sum = (x,y) => x + y;

console.log(numbers.reduce(sum,0));
console.log(reduce(numbers,sum,0));


 
//suma todos los elementos de un arreglo
//var total = [0,1,2,3,4].reduce(function(a,b) {return a+b});

//hace un unico arreglo a partir de varios arreglos
//var total = [[0,1], [4,8], [3,5]].reduce(function(a,b) {return a.concat(b)})