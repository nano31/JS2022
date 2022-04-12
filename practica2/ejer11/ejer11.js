function identity(x){
    return x;
}
var id = function(x){
return x;
}
var iden = x => x;
var identidad = identity;

console.log(typeof identity); //function
console.log(typeof id); //function
console.log(typeof iden); //function
console.log(typeof identidad); //function

console.log(identity('Hola'));
console.log(id('Hello'));
console.log(iden('Buen dia'));
console.log(identidad('Buen dia'));