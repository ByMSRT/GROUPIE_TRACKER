package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type ArtistData struct {
	Id           int64    `json:"id"`
	Image        string   `json:"image"`
	Name         string   `json:"name"`
	Members      []string `json:"members"`
	CreationDate uint16   `json:"creationDate"`
	FirstAlbum   string   `json:"firstAlbum"`

	Locations_Url string `json:"locations"`

	ConcertDates_Url string `json:"concertDates"`

	Relations_Url string `json:"relations"`
}

func ContentArtist() {
	const api_artist string = "https://groupietrackers.herokuapp.com/api/artists"
	res, err := http.Get(api_artist)

	if err != nil {
		panic(err.Error())
	}
	body, err := ioutil.ReadAll(res.Body)

	if err != nil {
		panic(err.Error())
	}

	var data ArtistData
	json.Unmarshal(body, &data)

	fmt.Println("Id: ", data.Id)
	fmt.Println("Name: ", data.Name)
	fmt.Println("Members: ", data.Members)
	fmt.Println("Date: ", data.CreationDate)
}

func main() {
	ContentArtist()
}
