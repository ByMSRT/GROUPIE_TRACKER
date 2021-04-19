// function initMap() {
//     const uluru = { lat: 47.205617056212475, lng: -1.539378717397206 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru
//     });

//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });

// }

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    });
    const geocoder = new google.maps.Geocoder();
    document.getElementById("submit").addEventListener("click", () => {
      geocodeAddress(geocoder, map);
    });
  }
  
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }