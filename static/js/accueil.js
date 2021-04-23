// function MinAndMax(){
//     var min = document.getElementById("date-min").value
//     var max = document.getElementById("date-max").value
//     if (min < 1950 || min > 2021 || max > 2021 || max < 1950){
//         alert("Le minimum possible est 1950 et le maximum possible est 2021.")
//     }

//     for (let i = min; i < max ; i++) {
//         if (creationdate = i ){

//         }
//     }

const matchList = document.getElementById('card-data');
const api = "/api/"
const artist = "artists"
const location_ = "locations"

const searchStates = async searchText => {
    const res_artist = await fetch(api + artist);
    const res_location = await fetch(api + location_);
    const states = await res_artist.json();
    const states2 = await res_location.json();
    console.log(states2);

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');

        let allMembers = ""

        for (let index = 0; index < state.members.length; index++) {
            allMembers += state.members[index]
        }
        console.log(allMembers)
        let resultOfMatches = state.name.match(regex) || (state.creationDate).toString().match(regex) || allMembers.match(regex) || (state.firstAlbum).toString().match(regex)
        return resultOfMatches

    });
    let matches2 = states2.index.filter(state2 => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state2.locations[0].match(regex)
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
                        <p>${match.locations}</p>
                    </div>
                    <button class="btn" type="button">Voir plus ...</button>
                </div>
        </div>
        
        `).join('');

        let finalhtml = html ;
        matchList.innerHTML = finalhtml;
    }
}












var min = document.getElementById("mini")
var max = document.getElementById("maxi")

function minOrMax(param) {
    let select = document.createElement("select")
    select.id = "Select"+param.id
    param.appendChild(select)

    if (param == min) {
        minimum(select)
    }
    if (param == max) {
        maximum(select)
    }
}

function minimum(param) {
    for (let i = 1960; i <= 2021; i++){
        var optionMin = document.createElement("option")
        optionMin.value = i
        optionMin.text = i
        param.appendChild(optionMin)
    }
}

function maximum(param){
    for (let l = 2021; l >= 1960; l--){
        var optionMax = document.createElement("option")
        optionMax.value = l
        optionMax.text = l
        param.appendChild(optionMax) 
    }
}

minOrMax(min)
minOrMax(max) 