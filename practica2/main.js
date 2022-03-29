let a = 1;
let b = true;
let c = "Hola";
let d = null;
let e;
let f = 2n ** 60n;
let g = new Date();
let h = [1,2,3,4];
let i = 'Hola';
let j = { x: 2.0, y: -3.6 };
let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);

/*a = 25 --> imprime 25
console.log(++a) --> 26
console.log(a++) --> 25
console.log(a == '27') --> true
console.log(a === '27') --> false*/

let nro = 25;
console.log(++nro);
console.log(nro++);
console.log(nro == '27'); /*compara si son el mismo tipo de dato*/
console.log(nro === '27');/*compara si son el mismo nro y el mismo tipo de dato*/

/*en ambos casos imprime 26*/