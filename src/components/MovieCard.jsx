import { Link } from 'react-router';

function MovieCard({ movie }) {
  const genreText = Array.isArray(movie.genre)
    ? movie.genre.join(', ')
    : movie.genre;

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="movie-card"
    >
      <div className="movie-card__poster-wrapper">
        <img
          className="movie-card__poster"
          src={movie.poster}
          alt={`Постер фильма ${movie.title}`}
        />

        <span className="movie-card__rating">
          ★ {movie.rating}
        </span>
      </div>

      <div className="movie-card__content">
        <h2 className="movie-card__title">
          {movie.title}
        </h2>

        <div className="movie-card__meta">
          <span>{movie.year}</span>
          <span>{genreText}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;