function MinAndMax(){
    var min = document.getElementById("date-min").value
    var max = document.getElementById("date-max").value
    if (min < 1950 || min > 2021 || max > 2021 || max < 1950){
        alert("Le minimum possible est 1950 et le maximum possible est 2021.")
    }
}