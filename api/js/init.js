const DATA_URL = `https://api.themoviedb.org/3/movie/popular?api_key=dacb13c9db5762e9f7595e4e880395ef`

movieArray = []

async function getAndShowMovies(){
    try {
        const response = await fetch(DATA_URL);
        const movies = await response.json();
        movieArray = movies.results
        console.log(movieArray);
    } catch(error) {
        console.log(error)
    }
    showMovies();
}

function showMovies(){
    const container = document.getElementById("movies")
    let contentToAppend = "";
    console.log(movieArray)

    movieArray.forEach(movie => {
        console.log(movie.title)
        contentToAppend += `
        <div class="col">
            <div class="card h-100 bg-body-tertiary border-light">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>${movie.title}</strong>
                        </button>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p> ${movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    
    container.innerHTML = contentToAppend;
}  

getAndShowMovies();


