var jsonStr = '['
+ '{"name":"Alice","dob": "2001-03-04T00:00:00.000Z","h": 165,"w": 68},'
+ '{"name":"Robert","dob": "1997-01-31T00:00:00.000Z","h": 170,"w": 88},'
+ '{"name":"Charles","dob": "1978-10-15T00:00:00.000Z","h": 188,"w":102},'
+ '{"name":"Lucía","dob": "1955-08-07T00:00:00.000Z","h": 155,"w": 61},'
+ '{"name":"Peter","dob": "1988-03-09T00:00:00.000Z","h": 165,"w": 99},'
+ '{"name":"Lucas","dob": "1910-12-04T00:00:00.000Z","h": 172,"w": 75}]';

function overweigthNames(people){
    return people
    .filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25) //calcula IMC y filtra aquellos con IMC > 25
    .map(p => p.name) //crea un nuevo array con el nombre de las personas filtradas
    .reduce((n1, n2) => n1 + " " + n2) //concatena los nombres del array creado en la linea anterior
}
console.log(overweigthNames(JSON.parse(jsonStr)));


const today = new Date();
console.log(today)


