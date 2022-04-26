//const URL_EPISODES = 'https://rickandmortyapi.com/api/episode';
const container = document.getElementById("episodes-container");

function RickAndMorty(id){
    fetch(`https://rickandmortyapi.com/api/episode/`)
    .then(response => response.json())
    
    .then(data =>{
        //ShowEpisode(data)
        data.results.map(elem =>{
            ShowEpisode(elem)
        })
    })
}

// function getEpisode(number){
//     for(let i = 1; i <= number; i++){
//         RickAndMorty(i);
//     }
// }

// getEpisode(20);

function ShowEpisode(episode){
    const li = document.createElement('li');
    li.classList.add("episode");

    const name = document.createElement("p");
    name.textContent = episode.name;

    const airDate = document.createElement("p");
    airDate.textContent = episode.created;

    li.appendChild(name);
    li.appendChild(airDate);

    container.appendChild(li);

}