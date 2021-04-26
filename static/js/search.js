const search = document.getElementById('search');
const matchList = document.getElementById('card-data');


<<<<<<< HEAD
const api_artists = "https://cors-anywhere.herokuapp.com/https://groupietrackers.herokuapp.com/api/"
=======
const api = "/api/"
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212

const artist = "artists"
const location_ = "locations"
const date = "dates"
const relation = "relation"

<<<<<<< HEAD
const searchStates = async searchText => {
    const res_artist = await fetch(api_artists + artist);
    const res_location = await fetch(api_artists + location_);
=======


const searchStates = async searchText => {
    const res_artist = await fetch(api + artist);
    const res_location = await fetch(api + location_);
<<<<<<< HEAD
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======
    const res_relation = await fetch(api + relation)
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
    const states = await res_artist.json();
    const states2 = await res_location.json();
    const relationConvert = JSON.stringify(res_relation);
    /*     const states3 = await relationConvert.json(); */
    console.log(res_artist);
    console.log(res_location);
    console.log(res_relation);
    console.log(states);
    console.log(states2)
    console.log(relationConvert);

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
<<<<<<< HEAD
        return state.name.match(regex) || (state.creationDate).toString().match(regex) || state.members[0].match(regex) || (state.firstAlbum).toString().match(regex)
=======

        let allMembers = ""

        for (let index = 0; index < state.members.length; index++) {
            allMembers += state.members[index]
        }
        let resultOfMatches = state.name.match(regex) || (state.creationDate).toString().match(regex) || allMembers.match(regex) || (state.firstAlbum).toString().match(regex)
        return resultOfMatches
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212

    });

    let matches2 = states2.index.filter(state2 => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        console.log(states2)

        let allLocation = ""

        for (let index = 0; index < state2.locations.length; index++) {
            allLocation += state2.locations[index]
        }
        let resultLocations = allLocation.match(regex);
        console.log(resultLocations);
        let resultData = JSON.stringify(resultLocations);
        console.log(resultData)
        return resultData

    });
    console.log(matches)
    console.log(matches2)


    if (searchText.length === 0) {
        matches = [];
        matches2 = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches, matches2);

}

const outputHtml = (matches, matches2) => {
<<<<<<< HEAD
=======

>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card" id="card">
            <div class="card-header" id="card-header">
                <img src="${match.image}" alt="">
            </div>
                <div class="card-body" id="card-body">
                    <ul>
<<<<<<< HEAD
                        <li><h4>Nom :</h4>${match.name}</li>
                        <br>
                        <li><h4>Date de création :</h4>${match.creationDate}</li>
                        <br>
                        <li><h4>Membres :</h4>${match.members[0]}</li>
                        <br>
                        <li><h4>Premier album :</h4>${match.firstAlbum}</li>
                    </ul>
                    <a href="#" class="btn">Read more</a>
=======
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
                    </div>
<<<<<<< HEAD
                    <button class="btn" type="button">Voir plus ...</button>
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======
                <button class="btn" type="button">Voir plus ...</button>
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
                </div>
        </div>
        
        `).join('');

<<<<<<< HEAD
<<<<<<< HEAD
        /* const html2 = matches2.map(match2 => `
        ${match2.locations[0]}</h4>
        </>
        `).join(''); */

        let finalhtml = html /* + html2 */ ;
        console.log(finalhtml)
=======
        /*         const html2 = matches2.map(match2 => `
                <div class="card" id="card">
=======
        const html2 = matches2.map(match2 => `
        <div class="card" id="card">
            <div class="card-header" id="card-header">
            </div>
                <div class="card-body" id="card-body">
                    <div class="popup-header-cont">
                    </div>
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
                    <div class="read-more-cont">
                        <p>${match2.locations}</p>
                    </div>
                <button class="btn" type="button">Voir plus ...</button>
            </div>
        </div>
         `).join('');

        console.log(html2)
        let finalhtml = html + html2;

<<<<<<< HEAD
        let finalhtml = html /* + html2 */ ;
        //console.log(finalhtml)
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======
        console.log(finalhtml)
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
        matchList.innerHTML = finalhtml;
    }
}


<<<<<<< HEAD
search.addEventListener('input', () => searchStates(search.value))
=======
search.addEventListener('input', () => searchStates(search.value))

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
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
