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