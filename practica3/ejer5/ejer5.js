const API_URL = 'https://rickandmortyapi.com/api/episode';
const container = document.getElementById("episodes-container")


function fetchEpisode(){
    fetch(API_URL)
    .then(resp => resp.json())
    .then(data => {
        data.results.map(elem =>{
            ShowEpisode(elem);
        })
    })
}

function searchEpisode(){
    container.innerHTML = ''; //limpia la pantalla
    const searchValue = document.getElementById("search-episode").value;

    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        let episode = data.results[0].name;
        const li = document.createElement('li');
        li.innerHTML = episode;
        container.appendChild(li);
    })
    .catch(err => alert(err))

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