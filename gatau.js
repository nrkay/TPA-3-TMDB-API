// document.querySelector('#search').addEventListener("click", searchMovie)
// Menampilkan movie

let nav = document.getElementById('nav');
let cardTitle = document.getElementById('cardTitle')
let card = document.getElementById('card');


let listMovie = async function movie() {
    let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2742b2a761b82c4cb62be61847d5acb7&sort_by=popularity.desc&page=1`)
    let result = await response.json()
    let movies = result.results
    let variabelKosong = ''
    movies.forEach(item => {
       
        // let subCard = document.getElementById('subCard');
        // let descMovie = document.getElementById('descMovie')
        // let cardTitle = document.getElementById('cardTitle')
        // let cardRating = document.getElementById('cardRating')
        // contoh.innerHTML += `<h2>${item.original_title}</h2>`
        card.innerHTML += `
        <!-- Create Movie Card -->
        <div class="col-3 mt-2">
          <div class="card" id="subCard">
            <div class="">
              <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="" id="img-card">
              <div class="d-flex mb-3" id="descMovie">
                <div class="p-2 m-1"  id="cardTitle">
                  <p>${item.original_title}</p>
                </div>
                <div class="ms-auto p-1 m-1"  id="cardRating">
                  <p>${item.vote_average}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
   `
      
    })  
}

listMovie()







// Search Movie

let search = document.getElementById('search')
const inputMovie = document.getElementById('inputMovie').value;

search.addEventListener("click", (event)=>{

  event.preventDefault();
    let searchMovie = async (inputUser) => {
      let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2742b2a761b82c4cb62be61847d5acb7&query=${inputUser}&page=1`)
      let result = await response.json()
      let movies = result.results;
      console.log(movies)
      let kosong = ''
  
      movies.forEach(item => {
        card.innerHTML += `
        <!-- Create Movie Card -->
        <div class="col-3 mt-2">
          <div class="card" id="subCard">
            <div class="">
              <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="" id="img-card">
              <div class="d-flex mb-3" id="descMovie">
                <div class="p-2 m-1"  id="cardTitle">
                  <p>${item.original_title}</p>
                </div>
                <div class="ms-auto p-1 m-1"  id="cardRating">
                  <p>${item.vote_average}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
      });
  
  
    }
    searchMovie(inputMovie);
})











