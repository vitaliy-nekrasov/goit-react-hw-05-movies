import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/movies-api';
import {
  Section,
  Title,
  Gallery,
  Poster,
  FilmTitle,
  StyledLink,
} from './Home.styled';

export function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingFilms);
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      <Gallery>
        {trendingFilms.map(film => (
          <StyledLink to={`/movies/${film.id}`} key={film.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/w400${film.poster_path}`}
              alt=""
            />
            <FilmTitle>{film.title}</FilmTitle>
          </StyledLink>
        ))}
      </Gallery>
    </Section>
  );
}
