
fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
.then(resp => resp.json)
.then(data => {
    data.results
})