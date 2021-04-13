package main

import (
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

var e *template.Template

func accueil(w http.ResponseWriter, r *http.Request) {
	e = template.Must(template.ParseFiles("templates/accueil.html"))
}

func handleRequests() {
	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", accueil).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))
}

func main() {
	handleRequests()
}
