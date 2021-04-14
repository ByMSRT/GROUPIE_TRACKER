function initMap() {
    const uluru = { lat: 47.205617056212475, lng: -1.539378717397206 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

}