package controller

import (
	"html/template"
	"net/http"
)

func accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueil.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)

}
