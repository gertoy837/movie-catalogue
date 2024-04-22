import TheMovieDbSource from "../../data/themoviedb-source";
import { createMovieItemTemplate } from "../templates/template-creator";

const Upcoming = {
  async render() {
    return `
    <div cla"ss="content">
    <h2 clas"s="content__heading">Upcoming in Cinema</h2>
    <div id="movies" class="movies">
    </div>
    </div>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector("#movies");
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
