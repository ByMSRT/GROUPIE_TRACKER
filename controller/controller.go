package controller

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func Accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueilv2.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func Test(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/test.html", "./templates/navigation.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func Map(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/map.html", "./templates/navigation.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func Search(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/searchv2.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func loadApi(w http.ResponseWriter, r *http.Request, endpoint string) {

	response, err := http.Get("https://groupietrackers.herokuapp.com/api/" + endpoint)

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	responseData, err := ioutil.ReadAll(response.Body)

	if err != nil {
		log.Fatal(err)
	}

	w.Header().Add("Content-Type", "application/json")
	w.Write(responseData)
}

func Artists(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "artists")
}

func Locations(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "locations")
}
