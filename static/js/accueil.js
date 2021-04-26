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
        hideloader();
    }
    show(dataArtist);
}

data(api + artist);

function hideloader() {
    document.getElementById('loading').style.display = 'none'
}


function show(dataArtist) {
    var arr = []
    const tab = dataArtist.map(match => `
    <div class="card" id="card">
        <div class="card-header" id="card-header">
            <img src="${match.image}" alt="">
        </div>
            <div class="card-body" id="card-body">
                <ul>
                    <li><h4>Nom :</h4><br>${match.name}</li>
                    <br>
                    <li id="test" value="${match.creationDate}"><h4>Date de création :</h4><br>${match.creationDate}</li>
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
            <button class="btn" type="button">Voir plus ...</button>
            </div>
    </div>
    
    `);//.join('');
    for (let i = mini; i <= maxi; i++){
        if (match.creationDate == i){
            arr.push(tab["l'index qui correspond"])
        }
    }
    arr.join('');
    matchList.innerHTML = arr;
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

var min = document.getElementById("mini")
var max = document.getElementById("maxi")

function minOrMax(param) {
    let select = document.createElement("select")
    select.id = "Select"+param.id
    param.appendChild(select)
    select.setAttribute("onchange", "MinAndMax()")
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


var mini
var maxi 

function MinAndMax(){
    mini = document.getElementById("Selectmini").value
    maxi = document.getElementById("Selectmaxi").value
    console.log(mini)
}