const resultsContainer = document.querySelector(".results-container");
const searchInput = document.querySelector("#search-term");
const submitBtn = document.querySelector("#submit-btn");

const handleSearch = (e) => {
  e.preventDefault();
  const movieSearch = searchInput.value;

  fetch(`http://www.omdbapi.com/?apikey=92a428f9&s=${movieSearch}`)
    .then((res) => res.json())
    .then((data) => {
      for (const movie of data.Search) {
        resultsContainer.innerHTML += `
                    <div class="card">
                        <div class="movie-card">
                            <div class="movie-poster">
                                <img class="poster" src=${
                                  movie.Poster === "N/A"
                                    ? "/images/placeholder.jpg"
                                    : movie.Poster
                                } alt=${movie.Title}>
                                <div class="movie-overlay">
                                    <button class="btn"><i class="fa-solid fa-circle-plus fa-lg"></i> Watchlist</button>
                                </div>
                            </div>
                            <div class="movie-details">
                                <h2 class="movie-title">${movie.Title}</h2>
                                <div class="movie-subs">
                                    <p class="duration">Year: ${movie.Year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
      }
      console.log(data);
    });
  searchInput.value = "";
  if (resultsContainer.firstChild) {
    resultsContainer.innerHTML = "";
  }
};

submitBtn.addEventListener("click", handleSearch);
