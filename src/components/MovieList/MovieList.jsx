import {
  Gallery,
  StyledLink,
  Item,
  Poster,
  FilmTitle,
} from './MovieList.styled';
import PropTypes from 'prop-types';

export function MovieList({ items }) {
  const getImage = image => {
    if (image === null) {
      return 'https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg';
    }
    return `https://image.tmdb.org/t/p/w400${image}`;
  };

  return (
    <Gallery>
      {items.map(item => (
        <Item key={item.id}>
          <StyledLink to={`${item.id}`}>
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
