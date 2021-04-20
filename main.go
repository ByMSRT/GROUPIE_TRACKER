package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	controller "./controller"
)

func main() {

	loadApi()

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

type Response struct {
	Id           int      `json:"id"`
	Image        string   `json:"image"`
	Name         string   `json:"name"`
	Members      []string `json:"members"`
	CreationDate uint16   `json:"creationDate"`
	FirstAlbum   string   `json:"firstAlbum"`
	Location     string   `json:"locations"`
	ConcertDates string   `json:"concertDates"`
	Relations    string   `json:"relations"`
}

func loadApi() {
	response, err := http.Get("https://groupietrackers.herokuapp.com/api/artists")

	if err != nil {
		fmt.Print(err.Error())
		os.Exit(1)
	}

	responseData, err := ioutil.ReadAll(response.Body)
	/* var tabResponse = []byte(responseData) */
	if err != nil {
		log.Fatal(err)
	}

	/* response1 := Response{}

	test := json.Unmarshal(tabResponse, &response1)

	if test != nil {
		log.Fatal(test)
	}
	fmt.Println(response1.Id) */

	fmt.Println(string(responseData))

	/* var responseObject Response
	json.Unmarshal(responseData, &responseObject)
	fmt.Println(responseObject) */
}
