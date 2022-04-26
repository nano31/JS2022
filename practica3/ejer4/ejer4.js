//const URL_EPISODES = 'https://rickandmortyapi.com/api/episode';
const container = document.getElementById("episodes-container");

function RickAndMorty(id){
    fetch(`https://rickandmortyapi.com/api/episode/${id}/`)
    .then(response => response.json())
    .then(data =>{
        //ShowEpisode(data)
        console.log(data)
    })
}

function getEpisode(number){
    for(let i = 1; i <= number; i++){
        RickAndMorty(i);
    }
}

getEpisode(8);

function ShowEpisode(episode){
    const li = document.createElement('li');
    li.classList.add("episode");

    const name = document.createElement("p");
    name.textContent = episode.name

    const episodeUrl = document.createElement("link");
    episodeUrl.textContent = episode.url;

    li.appendChild(name);
    li.appendChild(episodeUrl);

    container.appendChild(li);

}