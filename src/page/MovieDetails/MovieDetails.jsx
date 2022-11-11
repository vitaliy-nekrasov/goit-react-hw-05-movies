import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesById } from 'services/movies-api';
import { Outlet } from 'react-router-dom';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import {
  Section,
  Poster,
  MovieInfo,
  Title,
  Score,
  Overview,
  OverviewText,
  GenresTitle,
  Genres,
  Head,
} from './MovieDetails.styled';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    getMoviesById(movieId).then(setMovieInfo);
  }, [movieId]);

  const movieYear = new Date(movieInfo.release_date).getFullYear();
  const votes = Number.parseInt(movieInfo.vote_average / 0.1);

  const getGenres = genres => {
    if (!genres) {
      return;
    }
    return genres.map(genre => genre.name).join(' ');
  };

  const getPoster = poster => {
    if (!poster) {
      return;
    }
    return `https://image.tmdb.org/t/p/w400/${poster}`;
  };

  return (
    <Section>
      <Head>
        <Poster src={getPoster(movieInfo.poster_path)} alt="" />
        <MovieInfo>
          <Title>
            {movieInfo.original_title} ({movieYear})
          </Title>
          <Score>User score: {votes}%</Score>
          <Overview>Overview:</Overview>
          <OverviewText>{movieInfo.overview}</OverviewText>
          <GenresTitle>Genres:</GenresTitle>
          <Genres>{getGenres(movieInfo.genres)}</Genres>
        </MovieInfo>
      </Head>
      <AdditionalInformation />
      <Outlet />
    </Section>
  );
}
