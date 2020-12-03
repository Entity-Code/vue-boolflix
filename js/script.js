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
      research: ""
   },
   mounted: function() {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=632b3a13e5a3fa9d76198ee6af3fe116&query=Pink Floyd")
      .then(risposta => {


      });

   },

   methods: {


     search: function () {
      // CHIAMATA MOVIES
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=632b3a13e5a3fa9d76198ee6af3fe116&query=" + this.research)
       .then(risposta => {

         // centralizzazione array results nel mio "movies"
         this.movies = risposta.data.results;

         for (var i = 0; i < this.movies.length; i++) {

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;

            let lowerLanguage = this.movies[i].original_language;
            let upperLanguage = lowerLanguage.toUpperCase(lowerLanguage);

            this.movies[i].upperLanguage = upperLanguage;

          }
      });

      // CHIAMATA SERIE TV
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=632b3a13e5a3fa9d76198ee6af3fe116&language=it_IT&query=" + this.research)
       .then(risposta => {

         // centralizzazione array results nel mio "movies"
         this.movies = risposta.data.results;

         for (var i = 0; i < this.movies.length; i++) {

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;

            let lowerLanguage = this.movies[i].original_language;
            let upperLanguage = lowerLanguage.toUpperCase(lowerLanguage);

            this.movies[i].upperLanguage = upperLanguage;

          }


      });
     }

   }
});
