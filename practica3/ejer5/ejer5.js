const API_URL = 'https://rickandmortyapi.com/api/episode';
const container = document.getElementById("episodes-container")
const searchBtn = document.getElementById("search-button")


function fetchEpisode(){
    fetch(API_URL)
    .then(resp => resp.json())
    .then(data => {
        data.results.map(elem =>{
            ShowEpisode(elem);
        })
    })
}

function ShowEpisode(episode){
    const li = document.createElement('li');

    const name = document.createElement('p');
    name.textContent = episode.name;

    const created = document.createElement('p');
    created.textContent = episode.created;

    li.appendChild(name);
    li.appendChild(created);

    container.appendChild(li);
}