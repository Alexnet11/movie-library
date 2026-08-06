import { Link, useParams} from "react-router";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";


function MoviesPage(){
  const {movieId} = useParams();
  console.log(movieId);
  console.log(typeof movieId);

  if (!movieId) {
  return (
    <section className="page movies-page">
      <div className="page-heading">
        <span className="page-heading__label">
          Каталог
        </span>

        <h1>Библиотека фильмов</h1>

        <p>
          Выбери карточку, чтобы открыть информацию
          о фильме.
        </p>
      </div>

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

  const currentMovie = movies.find((movie) => {
    return movie.id === Number(movieId);
  } );

  if (!currentMovie){
    return(
      <section>
        <h1>Фильм не найден</h1>

        <Link to= "/movies">
          Вернуться к фильмам
        </Link>
      </section>
    );
  }

  return(
    <section>
      <Link to = "/movies">
        Назад к фильмам
      </Link>

      <h1>{currentMovie.title}</h1>

      <img
        src={currentMovie.poster}
        alt={`Постер фильма ${currentMovie.title}`}
      />

      <p>Год:{currentMovie.year}</p>
      <p>Жанр:{currentMovie.genre}</p>
      <p>Рейтинг:{currentMovie.rating}</p>
    </section>
  );

}

export default MoviesPage;
