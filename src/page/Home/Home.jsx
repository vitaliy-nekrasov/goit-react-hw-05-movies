import { useState, useEffect } from 'react';
import { Error } from 'components/Error/Error';
import { getTrendingMovies } from 'services/movies-api';
import {
  Section,
  Title,
  Gallery,
  Poster,
  FilmTitle,
  StyledLink,
} from './Home.styled';

export default function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(setTrendingFilms)
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      {trendingFilms.length !== 0 && (
        <Gallery>
          {trendingFilms.map(film => (
            <StyledLink to={`/movies/${film.id}`} key={film.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
                alt={film.title}
              />
              <FilmTitle>{film.title}</FilmTitle>
            </StyledLink>
          ))}
        </Gallery>
      )}
      {trendingFilms.length === 0 && error !== null && (
        <Error message={error} />
      )}
    </Section>
  );
}
