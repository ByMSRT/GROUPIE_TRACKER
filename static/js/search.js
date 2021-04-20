const search = document.getElementById('search');
const matchList = document.getElementById('card-data');


const api_artists = "https://cors-anywhere.herokuapp.com/https://groupietrackers.herokuapp.com/api/"

const artist = "artists"
const location_ = "locations"



const searchStates = async searchText => {
    const res_artist = await fetch(api_artists + artist);
    const res_location = await fetch(api_artists + location_);
    const states = await res_artist.json();
    const states2 = await res_location.json();
    console.log(states2);

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || (state.creationDate).toString().match(regex) || state.members[0].match(regex) || (state.firstAlbum).toString().match(regex)

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
                        <li><h4>Nom :</h4>${match.name}</li>
                        <br>
                        <li><h4>Date de création :</h4>${match.creationDate}</li>
                        <br>
                        <li><h4>Membres :</h4>${match.members[0]}</li>
                        <br>
                        <li><h4>Premier album :</h4>${match.firstAlbum}</li>
                    </ul>
                    <div class="popup-header-cont">
                        <h3>${match.name}</h3>
                    </div>
                    <div class="read-more-cont">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, at et natus, velit neque repudiandae quidem a eum voluptas officiis in quod recusandae totam labore eius quibusdam ipsam culpa magni.</p>
                    </div>
                    <button class="btn" type="button">Voir plus ...</button>
                </div>
        </div>
        
        `).join('');

        /* const html2 = matches2.map(match2 => `
        ${match2.locations[0]}</h4>
        </>
        `).join(''); */

        let finalhtml = html /* + html2 */ ;
        console.log(finalhtml)
        matchList.innerHTML = finalhtml;
    }
}


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