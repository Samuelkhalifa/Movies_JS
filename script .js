// Balisage template HTML

const displayingArea = document.querySelector(".display-container")
const searchButton = document.querySelector(".search-button")



// ACITVER la cle API pour charger les films concernes par inputs
async function loadingApiData(i) {
    const URL = `http://www.omdbapi.com/?s=${i}&plot=full&apikey=${yekipa}`
    const response = await fetch(`${URL}`)
    const data = await response.json()
    if(data.Response == "True") {
        displayMovies(data.Search)
    }
}


// RECUPERER inputs de la search bar
searchButton.addEventListener('click', (e) => {
    e.preventDefault()
        const searchBar = document.getElementById("search-bar").value
        console.log(searchBar)
        loadingApiData(searchBar)
} )



// AFFICHER la liste de films proposées par la cle 
function displayMovies(i) {
    console.log(i)
    for(j=0;j<i.length; j++) {
        displayingArea.innerHTML +=
        `
        <div class="movies-display">
            <div class="one-movie-display">
                <div class="pic-area">
                    <img src="${i[j].Poster}">
                </div>
                <div>
                    <h1>${i[j].Title}</h1>
                    <h3>Type :${i[j].Type}</h3>
                    <h4>Year :${i[j].Year}</h4>
                    <h6>imdbID :${i[j].imdbID}</h6>
                    <h6>Plot :${i[j].Plot}</h6>
                    <div>
                        <button class="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
