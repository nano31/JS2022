var words = ['perro', 'gato', 'casa', 
'árbol', 'nube', 'día', 'noche', 
'zanahoria', 'babuino'];

/* -------------------- EJERCICIO 9 --------------------*/

//ordena los elementos del arreglo alfabéticamente (a-z)
console.log(words.sort((a,b) => a.localeCompare(b)));

//ordena los elementos del arreglo en orden inverso al alfabético (z-a)
console.log(words.sort((a,b) => b.localeCompare(a)));

/* -------------------- EJERCICIO 10 --------------------*/

//ordena los elementos del arreglo por longitud de palabra (de la palabra más corta a la más larga)
console.log(words.sort((a,b) => a.length - b.length));

//ordena los elementos del arreglo por long de palabra (de la palabra más larga a la más corta)
console.log(words.sort((a,b) => b.length - a.length));
