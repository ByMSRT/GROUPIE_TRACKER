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

	fmt.Println(string(colorBlue), "[SERVER_INFO] Starting local Server...")

	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	//http.HandleFunc("/", route)
	http.HandleFunc("/", controller.Accueil)
	http.HandleFunc("/valider", controller.Test)
	http.HandleFunc("/push", controller.Push)

	fmt.Println(string(colorGreen), "[SERVER_READY] on http://localhost:8000 ✅ ")
	fmt.Println(string(colorYellow), "[SERVER_INFO] To stop the program : Ctrl + c")
	http.ListenAndServe(":8000", nil)

}

/*func route(w http.ResponseWriter, r *http.Request) {
    if r.Method == "POST" && r.URL.Path == "/test" {
        http.Redirect(w, r, "test", http.StatusSeeOther)
    } else if r.Method == "POST" && r.URL.Path == "/push" {
        http.Redirect(w, r, "push", http.StatusSeeOther)
    } else {
        t.Execute(w, nil)
    }
}*/
