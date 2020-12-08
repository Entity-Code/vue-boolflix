var app = new Vue({
   el: "#app",
   data: {
      // display
      isHidden: true,
      opacity: "opacity",
      noOpacity: "noOpacity",

      infoActive: 0,
      // cast
      idCast: "",
      castNames: [],

      // generi
      genres: [],
      genreNames: [],

      movies: [],
      research: "",
   },
   mounted: function() {

      // risultati che appaiono appena aperto il sito
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=632b3a13e5a3fa9d76198ee6af3fe116&query=Shingeki no kyojin")
      .then(risposta => {

         this.movies = risposta.data.results;
         for (let i = 0; i < this.movies.length; i++) {

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;

            let lowerLanguage = this.movies[i].original_language;
            let upperLanguage = lowerLanguage.toUpperCase(lowerLanguage);

            this.movies[i].upperLanguage = upperLanguage;

            // cast
            this.idCast = this.movies[i].id

            // genre
            // console.log(this.movies[i].genre_ids);
            // this.genres= this.movies[i].genre_ids
            //
            // console.log(this.genres);
            //
            // console.log(this.idCast);

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

         for (let i = 0; i < this.movies.length; i++) {

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;

            let lowerLanguage = this.movies[i].original_language;
            let upperLanguage = lowerLanguage.toUpperCase(lowerLanguage);

            this.movies[i].upperLanguage = upperLanguage;

            // cast
            this.idCast = this.movies[i].id
            // console.log(this.idCast);

            // genre
            // console.log(this.movies[i].genre_ids);
            // this.genres= this.movies[i].genre_ids
            //
            // console.log(this.genres);
          }
      });




      // CHIAMATA SERIE TV
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=632b3a13e5a3fa9d76198ee6af3fe116&language=it_IT&query=" + this.research)
       .then(risposta => {

         // centralizzazione array results nel mio "movies"
         this.movies = risposta.data.results;

         for (let i = 0; i < this.movies.length; i++) {

            // arrotondamento voto
            let votoDiviso = (this.movies[i].vote_average / 2);
            var votoArrotondato = (Math.ceil(votoDiviso));

            // modifica dei voti arrotondati
            this.movies[i].stars = votoArrotondato;

            let lowerLanguage = this.movies[i].original_language;
            let upperLanguage = lowerLanguage.toUpperCase(lowerLanguage);

            this.movies[i].upperLanguage = upperLanguage;

            this.idCast = this.movies[i].id

            // console.log(this.idCast);

            // genre
            // console.log(this.movies[i].genre_ids);
            // this.genres= this.movies[i].genre_ids
            //
            // console.log(this.genres);
            }
         });
      },

      infoChange: function(index) {
         this.infoActive = index;

         // cast serie tv
         axios.get("https://api.themoviedb.org/3/tv/" + this.idCast + "/aggregate_credits?api_key=632b3a13e5a3fa9d76198ee6af3fe116")
         .then(risposta => {this.castNames = risposta.data.cast;});


         // generi movies
         axios.get("https://api.themoviedb.org/3/movie/" + this.idCast + "?api_key=632b3a13e5a3fa9d76198ee6af3fe116")
         .then(risposta => {

            this.genreNames = risposta.data.genres
            console.log(this.genreNames);

            for (var i = 0; i < this.genreNames.length; i++) {
               console.log(this.genreNames[i].name);
            }

            // this.castNames = risposta.data.cast;
         });
      }



   }
});
