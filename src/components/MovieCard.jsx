
function MovieCard({movie}){

  return(
    <article className="movie-card">
      <img
        src={movie.poster}
        alt={`Постер фильма ${movie.title}`}
      />

      <div>
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
        <p>Рейтинг:{movie.rating}</p>
      </div>
    </article>
  );
}

export default MovieCard;