import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesById } from 'services/movies-api';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    getMoviesById(movieId).then(setMovieInfo);
  }, [movieId]);

  //   const votes = movieInfo.vote_count / movieInfo.vote_average;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`}
        alt=""
      />
      <h1>
        {movieInfo.original_title} ({movieInfo.release_date})
      </h1>
      {/* <p>User score: {votes}</p> */}
    </section>
  );
}
