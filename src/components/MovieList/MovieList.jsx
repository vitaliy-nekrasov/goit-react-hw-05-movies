import {
  Gallery,
  StyledLink,
  Item,
  Poster,
  FilmTitle,
} from './MovieList.styled';

export function MovieList({ items }) {
  return (
    <Gallery>
      {items.map(item => (
        <Item key={item.id}>
          <StyledLink to={`${item.id}`}>
            <Poster
              src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
              alt=""
            />
            <FilmTitle>{item.title}</FilmTitle>
          </StyledLink>
        </Item>
      ))}
    </Gallery>
  );
}
