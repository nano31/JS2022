function michi(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(cat => cat[0])
    .then(cats => ShowMeTheCat(cats.url, 400, 400))
    .catch(err => console.log(err));

}
function ShowMeTheCat(url, w, h){
    const tiempo = 5;
    let img = document.createElement('img');
    

    img.src = url
    img.height = h;
    img.width = w;

    let frame = document.getElementById('frame');

    while(frame.firstChild != null){
    //si el elemento tiene hijos, los borra a todos
        frame.removeChild(frame.firstChild);
    //si no se eliminan los hijos, las img se van a ubicar una debajo de la otra
    //generando una especie de scroll infinito.
    }

    //le seteo un escuchador para el elemento load.
    img.addEventListener('load', function(){ setTimeout(michi, tiempo*1000) })

    frame.appendChild(img);//en este momento busca y muestra la img
    
}