package controller

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

func Accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueilv2.html")

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

func Dates(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "dates")
}

func Relation(w http.ResponseWriter, r *http.Request) {
	loadApi(w, r, "relation")
}

func getId(w http.ResponseWriter, r *http.Request, id string) {

	response, err := http.Get("https://groupietrackers.herokuapp.com/api/relation/" + id)

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

func RelationData(w http.ResponseWriter, r *http.Request) {
	pathPart := strings.Split(r.URL.Path, "/")
	getId(w, r, pathPart[len(pathPart)-1])
}
