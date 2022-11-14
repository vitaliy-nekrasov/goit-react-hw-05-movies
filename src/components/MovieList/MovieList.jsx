import {
  Gallery,
  StyledLink,
  Item,
  Poster,
  FilmTitle,
} from './MovieList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export function MovieList({ items }) {
  const getImage = image => {
    if (image === null) {
      return 'https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg';
    }
    return `https://image.tmdb.org/t/p/w400${image}`;
  };

  const location = useLocation();

  return (
    <Gallery>
      {items.map(item => (
        <Item key={item.id}>
          <StyledLink to={`${item.id}`} state={{ from: location }}>
            <Poster src={getImage(item.poster_path)} alt={item.title} />
            <FilmTitle>{item.title}</FilmTitle>
          </StyledLink>
        </Item>
      ))}
    </Gallery>
  );
}

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
};
