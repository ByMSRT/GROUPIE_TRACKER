let tabMarker = [];
let marker;
function initMap() {
    let initialPlace = { lat: 47.205389240386936, lng: -1.539540743860519 }
    // Définit une map qui pointe sur Ynov Nantes
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: initialPlace,
    });

    marker = new google.maps.Marker({
        position: initialPlace,
        title : document.getElementById("search").value,
        map: map
    })
    
    tabMarker.push(marker)
    const geocoder = new google.maps.Geocoder();

    // Evènement qui va pointer sur un lieu si il y a un click
    let newPlace = document.getElementById("submit")
    newPlace.addEventListener("click", () => {
        marker.setMap(null)
        geocodeAddress(geocoder, map);
    });

    removeLastMarker()
}


function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("search").value;

    geocoder.geocode({ address: address }, (results, status) => {
        // Si L'API google est on va changer les coordonnées GPS 
        if (status === "OK") {
            resultsMap.setCenter(results[0].geometry.location);
            // On va recréer une map avec les nouvelles coordonnées GPS
            marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,});
            
        // Sinon message d'erreur 
        } else {
            alert("Error type :" + status);
        }
    });

}

// Fonction qui va retirer l'ancien marqueur 
function removeLastMarker() {
    if (tabMarker.length != 0) {
        tabMarker = [];
        marker.setMap(null)
    }
} 