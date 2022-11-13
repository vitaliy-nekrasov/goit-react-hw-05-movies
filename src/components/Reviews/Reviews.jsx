import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/movies-api';
import { Wrapper, List, Item, Author, Text, Span } from './Reviews.styled';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length === 0 ? (
        <h3>We don`t have any reviews for this movie!</h3>
      ) : (
        <List>
          {reviews.map(review => (
            <Item key={review.id}>
              <Author>
                <Span>Author:</Span> {review.author}
              </Author>
              <Text>{review.content}</Text>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
}
