const URL_EPISODES = 'https://rickandmortyapi.com/api/episode';

function RickAndMorty(){
    fetch(URL_EPISODES)
    .then(response => response.json())
    .then(data => data[0])
    .then(episode => ShowEpisode(episode.name))
}

function ShowEpisode(name){
    let li = document.createElement('li');

    let container = document.getElementById('container');
    container.appendChild(li);

    li.appendChild(p);
    p = name;
}