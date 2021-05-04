package controller

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"strings"
)

func Accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueilv2.html")

	if err != nil {
		codeErreur(w, r, 404)
		return
	}

	err = custTemplate.Execute(w, nil)
}

func Map(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/map.html")

	if err != nil {
		codeErreur(w, r, 404)
		return
	}
	err = custTemplate.Execute(w, nil)
}

func Search(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/searchv2.html")

	if err != nil {
		codeErreur(w, r, 404)
		return
	}
	err = custTemplate.Execute(w, nil)
}

func loadApi(w http.ResponseWriter, r *http.Request, endpoint string) {

	response, err := http.Get("https://groupietrackers.herokuapp.com/api/" + endpoint)

	if err != nil {
		codeErreur(w, r, 500)
		return
	}

	check := [4]string{"artists", "locations", "dates", "relation"}

	for i := 0; i < len(check); i++ {
		if endpoint != check[i] {
			codeErreur(w, r, 500)
			return
		}
	}

	responseData, err := ioutil.ReadAll(response.Body)

	if err != nil {
		codeErreur(w, r, 500)
		return
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
		codeErreur(w, r, 500)
		return
	}

	responseData, err := ioutil.ReadAll(response.Body)

	if err != nil {
		codeErreur(w, r, 500)
		return
	}

	w.Header().Add("Content-Type", "application/json")
	w.Write(responseData)
}

func RelationData(w http.ResponseWriter, r *http.Request) {
	pathPart := strings.Split(r.URL.Path, "/")
	getId(w, r, pathPart[len(pathPart)-1])
}

func codeErreur(w http.ResponseWriter, r *http.Request, status int) {

	colorRed := "\033[31m"

	if status == 404 {
		http.Error(w, "404 not found", http.StatusNotFound)
		fmt.Println(string(colorRed), "[SERVER_ALERT] - 404 : File not found, or missing...")
	}
	if status == 400 {
		http.Error(w, "400 Bad request", http.StatusBadRequest)
		fmt.Println(string(colorRed), "[SERVER_ALERT] - 400 : Bad request")
	}
	if status == 500 {
		http.Error(w, "500 Internal server error", http.StatusInternalServerError)
		fmt.Println(string(colorRed), "[SERVER_ALERT] - 500 : Internal server error")
	}

}
