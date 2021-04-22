const matchList = document.getElementById('card-data');

const api = "/api/"

const artist = "artists"
const location_ = "locations"
const date = "dates"
const relation = "relation"


async function data() {
    const res_artist = await fetch(api + artist);
    const res_location = await fetch(api + location_);
    const dataArtist = await res_artist.json();
    const dataLocation = await res_location.json();

    console.log(dataArtist);
    console.log(dataLocation);
}