fetch('https://api.thecatapi.com/v1/images/search')
.then(response => response.json())
//.then(data => console.log(data))
.then(cat => cat[0])
.then(cats => ShowMeTheCat(cats.url, 400, 400))

function ShowMeTheCat(url, w, h){
    let img = document.createElement('img');
    let frame = document.getElementById('frame');

    img.src = url
    img.height = h;
    img.width = w;

    frame.appendChild(img);
}