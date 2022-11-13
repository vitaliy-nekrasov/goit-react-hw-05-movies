import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/movies-api';
import {
  Wrapper,
  List,
  Item,
  Image,
  Name,
  Character,
  Span,
} from './Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getMoviesCast(movieId).then(setCastInfo);
  }, [movieId]);

  const getPicture = picture => {
    if (picture === null) {
      return 'https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png';
    }
    return `https://image.tmdb.org/t/p/w400${picture}`;
  };

  return (
    <Wrapper>
      <List>
        {castInfo.map(cast => (
          <Item key={cast.id}>
            <Image
              src={getPicture(cast.profile_path)}
              alt={cast.original_name}
            />
            <Name>{cast.original_name}</Name>
            <Character>
              <Span>Character:</Span> {cast.character}
            </Character>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
