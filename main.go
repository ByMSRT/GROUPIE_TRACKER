package main

import (
	"html/template"
	"net/http"
)

var t *template.Template

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	//http.HandleFunc("/", route)
	http.HandleFunc("/", accueil)
	http.HandleFunc("/test", test)
	http.HandleFunc("/push", push)
	http.ListenAndServe(":8000", nil)
}

func accueil(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/accueil.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)

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

func test(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/Test.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}

func push(w http.ResponseWriter, r *http.Request) {
	custTemplate, err := template.ParseFiles("./templates/push.html")

	if err != nil {

	}
	err = custTemplate.Execute(w, nil)
}
