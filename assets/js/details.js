const contentDetails = document.getElementById("content-details");
const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
fetch(url)
.then(response => response.json()).then(data => {
    console.log(data);
    contentDetails.innerHTML = `
    <div class="details"><h5>${data.name}</h5><h5>#00${data.id}</h5></div>
    <div class="type"><p>${data.types[0].type.name}</p></div>
    <div class="img"> <img src="${data.sprites.front_default}" alt="${data.name}"></div>
    <div class="info"><h5 class="informacoes">Informações:</h5>
    <p>Espécie: ${data.species.name}</p>
    <p>Altura: ${data.height}</p>
    <p>Peso: ${data.weight}</p>
    <p>Habilidades: ${data.abilities[0].ability.name} e ${data.abilities[1].ability.name}</p>
    <p>Gênero: ${data.height}</p>`;
});