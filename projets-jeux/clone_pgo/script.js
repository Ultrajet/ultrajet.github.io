fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById("pokemon-list");

        data.results.forEach(pokemon => {
            const item = document.createElement("li");
            item.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            list.appendChild(item);
        });
    })
    .catch(error => console.error("Erreur lors du chargement :", error));
