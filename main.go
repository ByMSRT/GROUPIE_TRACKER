package main

import (
	"fmt"
	"net/http"

	controller "./controller"
)

func main() {

	colorGreen := "\033[32m"
	colorBlue := "\033[34m"
	colorYellow := "\033[33m"

	fmt.Println(string(colorBlue), "[SERVER_INFO] : Starting local Server...")

	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	//http.HandleFunc("/", route)
	http.HandleFunc("/", controller.Accueil)
	http.HandleFunc("/valider", controller.Test)
	http.HandleFunc("/map", controller.Map)
	http.HandleFunc("/search", controller.Search)

	fmt.Println(string(colorGreen), "[SERVER_READY] : on http://localhost:8000 ✅ ")
	fmt.Println(string(colorYellow), "[SERVER_INFO] : To stop the program : Ctrl + c")
	http.ListenAndServe(":8000", nil)

	

}

