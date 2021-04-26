let tabMarker = [];
let marker;

function initMap() {
    const newMarker = document.getElementById('search').value
    let initialPlace = { lat: 47.205389240386936, lng: -1.539540743860519 }
    let newPlace = document.getElementById("submit")
    // Définit une map qui pointe sur Ynov Nantes
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: initialPlace,
    });

    
    marker = new google.maps.Marker({
        position: initialPlace,
        title : newMarker,
        map: map,
        clickable: true,
    })
    
    tabMarker.push(marker)

    // Transforme les noms de villes en coordonnées GPS
    const geocoder = new google.maps.Geocoder();
    // Evènement qui va pointer sur un lieu si il y a un click
    newPlace.addEventListener("click", () => {
        marker.setMap(null)
        geocodeAddress(geocoder, map);
        
    });

    marker.info = new google.maps.InfoWindow({
        content: '<b>City name:'+ newMarker +'</b>'
    });
        
    google.maps.event.addListener(marker, 'click', function() {
        this.info.open(map, marker);
    });

    console.log(newMarker)
}


function geocodeAddress(geocoder, resultsMap) {
    const search = document.getElementById('search')
    geocoder.geocode({ address: search.value }, (results, status) => {
        // Si L'API google est on va changer les coordonnées GPS 
        if (status === "OK") {
            resultsMap.setCenter(results[0].geometry.location);
            // On va recréer une map avec les nouvelles coordonnées GPS
            marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        // Sinon message d'erreur 
        } else {
            alert("Error type :" + status);
        }
    });

}

