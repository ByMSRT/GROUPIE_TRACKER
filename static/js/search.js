const search = document.getElementById('search');
const matchList = document.getElementById('card-data');


const api = "/api/"

const artist = "artists"
const location_ = "locations"
const date = "dates"
const relation = "relation"



const searchStates = async searchText => {
    const res_artist = await fetch(api + artist);
    const res_location = await fetch(api + location_);
    const res_relation = await fetch(api + relation)
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

        let allMembers = ""

        for (let index = 0; index < state.members.length; index++) {
            allMembers += state.members[index]
        }
        let resultOfMatches = state.name.match(regex) || (state.creationDate).toString().match(regex) || allMembers.match(regex) || (state.firstAlbum).toString().match(regex)
        return resultOfMatches

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

    if (matches.length > 0) {
        const html = matches.map(match => `
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
                        <p class="relation" data-url="${match.relations}">...</p>
                    </div>
                <button class="btn" type="button">Voir plus ...</button>
                </div>
        </div>
        
        `).join('');

        /* const html2 = matches2.map(match2 => `
        <div class="card" id="card">
            <div class="card-header" id="card-header">
            </div>
                <div class="card-body" id="card-body">
                    <div class="popup-header-cont">
                    </div>
                    <div class="read-more-cont">
                        <p>${match2.locations}</p>
                    </div>
                <button class="btn" type="button">Voir plus ...</button>
            </div>
        </div>
         `).join(''); */

        /* console.log(html2) */
        let finalhtml = html /* + html2 */ ;

        console.log(finalhtml)
        matchList.innerHTML = finalhtml;
    }
}


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
        relation.innerHTML = JSON.stringify(data);
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