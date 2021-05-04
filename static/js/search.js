const search = document.getElementById('search');
const matchList = document.getElementById('card-data');


const api = "/api/"

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
<<<<<<< HEAD
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======
    const res_relation = await fetch(api + relation)
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
=======
>>>>>>> 12903b79b5ebaf1e94114f1cf489c3e12ed715f5
    const states = await res_artist.json();
    const states2 = await res_location.json();

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

        let allLocation = ""

        for (let index = 0; index < state2.locations.length; index++) {
            allLocation += state2.locations[index]
        }
        let resultLocations = allLocation.match(regex);
        let resultData = JSON.stringify(resultLocations);
        return resultData

    });
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
                        <p class="relation" data-url="${match.relations}">...</p>
                        <button class="btn_map" type="button" onclick=redirectMap() >Accéder à la map</button>
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
=======
        /* const html2 = matches2.map(match2 => `
>>>>>>> 12903b79b5ebaf1e94114f1cf489c3e12ed715f5
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
         `).join(''); */

        /* console.log(html2) */
        let finalhtml = html /* + html2 */ ;

<<<<<<< HEAD
<<<<<<< HEAD
        let finalhtml = html /* + html2 */ ;
        //console.log(finalhtml)
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======
        console.log(finalhtml)
>>>>>>> 8d6c8c26761c37265601014a1570f1c9554ad893
=======
>>>>>>> 12903b79b5ebaf1e94114f1cf489c3e12ed715f5
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

cardData.addEventListener("click", async function(event) {
    if (event.target.tagName.toLowerCase() == "button") {
        const item = event.target.parentElement;
        const relation = item.querySelector(".relation");
        const pathPart = relation.dataset.url.split("/");
        let res = await fetch(`/api/relation/${pathPart[pathPart.length-1]}`);
        let data = await res.json();
        elementAPI(data, relation);
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
<<<<<<< HEAD
>>>>>>> 8671335c3f4c6096a4f996645d498fa7e1a20212
=======

function elementAPI(elementJSON, relation) {
    let json = JSON.stringify(elementJSON.datesLocations)
    let parseJSON = JSON.parse(json)
    let result = [];
    let index, resultpush

    for (index in parseJSON) {
        resultpush = index + " : " + parseJSON[index]
        result.push(resultpush)

    }

    relation.innerHTML = result.join(', ')

<<<<<<< HEAD
}

function redirectMap() {
    let url = new XMLHttpRequest
    console.log(url.open('POST', "http://localhost:8000/map", true));
    console.log(url.send());
}
>>>>>>> 6a05019eecc4492b4f8854569f9d42db51b79b0e
=======
}
>>>>>>> 71f90ac5347a904475f97677dc8e8b3605386ff7
