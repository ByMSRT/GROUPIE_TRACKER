package controller

import (
	"html/template"
	"net/http"
)

func Accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueil.html", "./templates/navigation.html")

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
