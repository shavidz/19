document.addEventListener("DOMContentLoaded", () => {
    // 2. სურათის შექმნა და body-ში დამატება
    const img = document.createElement("img");
    img.src = "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
    img.alt = "Random Image";
    img.style.width = "300px";
    document.body.appendChild(img);

    // 4. characters მასივი
    const characters = [
        {
            first_name: "Harry",
            last_name: "Potter",
            house: "Gryffindor",
            image: "img/harry.jpg",
            actor: "Daniel Radcliffe"
        },
        {
            first_name: "Hermione",
            last_name: "Granger",
            house: "Gryffindor",
            image: "img/R (1).jpeg",
            actor: "Emma Watson"
        },
        {
            first_name: "Ron",
            last_name: "Weasley",
            house: "Gryffindor",
            image: "img/R (2).jpeg",
            actor: "Rupert Grint"
        },
        {
            first_name: "Draco",
            last_name: "Malfoy",
            house: "Slytherin",
            image: "img/R.jpeg",
            actor: "Tom Felton"
        }
    ];

    // 4.2. პერსონაჟების HTML გენერაცია .map-ით
    const charactersList = document.getElementById("characters-list");

    charactersList.innerHTML = characters.map(character => `
        <div class="character-card">
            <img src="${character.image}" alt="${character.first_name}">
            <h3>${character.first_name} ${character.last_name}</h3>
            <p><strong>House:</strong> ${character.house}</p>
            <div class="btn-container">
                <button class="info-btn">Info</button>
                <button class="delete-btn">Delete</button>
            </div>
            <p class="info"><strong>Actor:</strong> ${character.actor}</p>
        </div>
    `).join("");

    // 5. ღილაკებზე eventListener-ების დამატება
    document.querySelectorAll(".character-card").forEach(card => {
        const infoBtn = card.querySelector(".info-btn");
        const deleteBtn = card.querySelector(".delete-btn");
        const info = card.querySelector(".info");

        infoBtn.addEventListener("click", () => {
            info.style.display = info.style.display === "none" ? "block" : "none";
        });

        deleteBtn.addEventListener("click", () => {
            card.remove();
        });
    });
});
