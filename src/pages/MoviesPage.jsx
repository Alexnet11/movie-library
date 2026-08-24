import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

function MoviesPage(){
  return(

    <section className="movies-page">
      <h1>Фильмы</h1>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default MoviesPage;
