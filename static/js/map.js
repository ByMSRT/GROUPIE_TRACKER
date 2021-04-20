function initMap() {
    // Définit une map qui pointe sur Ynov Nantes
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 47.205389240386936, lng: -1.539540743860519 },
    });
    const geocoder = new google.maps.Geocoder();

    // Evènement qui va pointer sur un lieu si il y a un click
    document.getElementById("submit").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;

    geocoder.geocode({ address: address }, (results, status) => {
        // Si L'API google est on va changer les coordonnées GPS 
        if (status === "OK") {
            resultsMap.setCenter(results[0].geometry.location);
            // On va recréer une map avec les nouvelles coordonnées GPS
            new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location,
        });
        // Sinon message d'erreur 
        } else {
            alert("Error type :" + status);
        }
    });

}
