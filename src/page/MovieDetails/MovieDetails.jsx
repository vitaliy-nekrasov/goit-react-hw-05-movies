import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesById } from 'services/movies-api';
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
  GoBackBtn,
  FaBackspaceStyled,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();

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

  const backLinkHref = location.state?.from ?? { pathname: '/' };

  return (
    <Section>
      <GoBackBtn to={backLinkHref}>
        <FaBackspaceStyled />
        Go back
      </GoBackBtn>
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
      <AdditionalInformation link={backLinkHref} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Section>
  );
}
