var app = new Vue({
   el: "#app",
   data: {
      show: true,
      movies: [],
      research: ""
   },
   mounted: function() {
      // risultati che appaiono appena aperto il sito
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=632b3a13e5a3fa9d76198ee6af3fe116&query=Pink Floyd")
      .then(risposta => {

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
