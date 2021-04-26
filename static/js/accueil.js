const matchList = document.getElementById('card-data');

const api = "/api/"

const artist = "artists"
const location_ = "locations"
const date = "dates"
const relation = "relation"


async function data(url) {
    const res_artist = await fetch(url);

    const dataArtist = await res_artist.json();
    console.log(dataArtist);
    if (res_artist) {

    }
    show(dataArtist);
}

data(api + artist);



function show(dataArtist) {
    const tab = dataArtist.map(match => `
    <div class="card" id="card">
        <div class="card-header" id="card-header">
            <img src="${match.image}" alt="">
        </div>
            <div class="card-body" id="card-body">
                <ul>
                    <li><h4>Nom :</h4><br>${match.name}</li>
                    <br>
                    <li><h4>Date de création :</h4><br>${match.creationDate}</li>
                    <br>
                    <li><h4>Membres :</h4><br>${match.members}</li>
                    <br>
                    <li><h4>Premier album :</h4><br>${match.firstAlbum}</li>
                </ul>
                <div class="popup-header-cont">
                    <h3>${match.name}</h3>
                </div>
                <div class="read-more-cont">
                    <p>${match.locations}</p>
                </div>
            <button class="btn" type="button">Voir plus ...</button>
        </div>
    </div>
    
    `).join('');
    matchList.innerHTML = tab;
}

const cardData = document.querySelector(".row");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn")

cardData.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() == "button") {
        const item = event.target.parentElement;
        const h3 = item.querySelector(".popup-header-cont").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector(".popup-header").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont
        popupBox();
    }
})

popupCloseBtn.addEventListener("click", popupBox);

popup.addEventListener("click", function(event) {
    if (event.target == popup) {
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}