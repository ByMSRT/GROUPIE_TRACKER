function Valeur() {
  var city = document.getElementById("City").value
  var country = document.getElementById("Country").value
  document.getElementById("TheMap").src = "https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=" + city + "%2C%20" + country + "+(Geocoding)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
  // document.getElementById("TheMap").src = "https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Nantes%2C%20France+(Geocoding)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
  console.log(document.getElementById("TheMap").src)
  console.log(city)
  console.log(country)
}

