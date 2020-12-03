// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto


var app = new Vue({
   el: "#app",
   data: {

      movies: [],
      filtra: "",
      icon: '<i class="fas fa-star"></i>'
   },
   mounted: function() {

      axios.get("https://api.themoviedb.org/3/search/movie?api_key=632b3a13e5a3fa9d76198ee6af3fe116&query=data")
      .then(risposta => {

         // centralizzazione array results nel mio "movies"
         this.movies = risposta.data.results;

         // traversamento per aggiungere ad ogni oggetto film la proprietà filtered pre-impostata a true per il filtraggio e per l'arrotondamento dei voti
         for (var i = 0; i < this.movies.length; i++) {
            // variabile di stato per il filtro
            this.movies[i].filtered = true;
            //aggiungo la proprietà stars settata a 0

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));
            // console.log(votoArrotondato);

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;
            // console.log(this.movies[i]);
            console.log(this.movies[i].stars);

            



         }





      });

   },

   methods: {

      // filtraggio searchbar
      filtraggio: function(){
        // ciclo la lista dei film
         this.movies.forEach((movie, i) => {
            let string = this.filtra;
            let title = movie.title;
            // converto in minuscolo
            string = string.toLowerCase();
            title = title.toLowerCase();

            // se la stringa è contenuta nel nome inserito
            if (title.includes(string)) {
               movie.filtered = true;
            } else { // altrimenti
               movie.filtered = false;
            }
        });
     }






   }
});
