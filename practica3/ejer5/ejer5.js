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
    const input = document.getElementById("search-episode").value.toLowerCase().trim();
    container.innerHTML = '';
    fetch(`https://rickandmortyapi.com/api/episode/?name=${input}`)
    .then(resp => resp.json())
    .then(data => {
        //console.log(data)
        data.results.forEach(element => {
            ShowEpisode(element);
        });
    });

}


function ShowEpisode(episode){
    const li = document.createElement('li');
    li.classList.add("episode");

    const name = document.createElement('p');
    name.textContent = episode.name;

    const created = document.createElement('p');
    created.textContent = episode.created;

    li.appendChild(name);
    li.appendChild(created);

    container.appendChild(li);
}