const Url_Api =  'https://aws.random.cat/meow';

function michi(){
    fetch('Url_Api')//devuelve un objeto promise
    //promise tiene 2 métodos importantes: then y catch
        .then(res => res.json()) //recibe un callback (una funcion), la cual se llama cuando el request llega
        //devuelve el array generado por la API
        .then(cats => cats[0])//devuelve el primer elemento del objeto
        .then(cat => ShowMeTheCat(cat.url, cat.width, cat.height))//devuelve los atributos pedidos
        .catch(err => console.log(err))//se ejecuta solamente si hubo un error
        

    //otra forma de usar Fetch
    //let promise = fetch('Url_Api');
    //promise.then();
}

//funcion encargada de mostrar la imagen del michi uwu
function ShowMeTheCat(url, w, h){
    let img = document.createElement('img');
    img.src = url;
    img.width = w;
    img.height = h;

    //crea un elemento imagen en el HTML y muestra la imagen
    let frame = document.getElementById('frame');
    frame.appendChild(img);
}