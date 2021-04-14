package controller

import (
	"html/template"
	"net/http"
)

func Accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueil.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func Test(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/test.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func Map(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/map.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}
