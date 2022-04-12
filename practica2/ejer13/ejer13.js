var alice = {
    name : "Alice",
    dob : new Date(2001, 3, 4),
    height : 165,
    weight : 68
};
var bob = {
   name : "Robert",
   dob : new Date(1997, 0, 31),
   height : 170,
   weight : 88
};
var charly = {
   name : "Charles",
   dob : new Date(1978, 9, 15),
   height : 188,
   weight : 102
};
var lucy = {
   name : "Lucía",
   dob : new Date(1955, 7, 7),
   height : 155,
   weight : 61
};
var peter = {
   name : "Peter",
   dob : new Date(1988, 2, 9),
   height : 165,
   weight : 99
};
var luke = {
   name : "Lucas",
   dob : new Date(1910, 11, 4),
   height : 172,
   weight : 75
};

//1. implementar una funcion que devuelva un arreglo con aquellas personas
//que tienen un IMC mayor a 25
var people = [alice, bob, charly, lucy, peter, luke];

function IMCcalc(people){
    array.forEach(element => {
        heighInMeters = people.height * 0.01;
        return people.weight / Math.pow(heighInMeters,2);
    });
}

var mayor25 = people.map(IMCcalc(people) > 25);

//2. implemente una funcion que devuelva un arreglo de las edades de las personas
//y el nombre de cada una.

function obtenerEdad(dob){
    const DATE = new Date(new Date().getTime - dob.getTime);
    return DATE.getFullYear()-1970;
}

function ages(people){
    const indice = people.reduce((acc, el) => ({...acc,[el.name]:getAge(el.dob), }), {});
    return indice;
}