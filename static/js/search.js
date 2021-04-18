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
                    <a href="#" class="btn">Read more</a>
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