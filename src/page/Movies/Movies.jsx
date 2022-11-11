import { useSearchParams } from 'react-router-dom';
import { Wrapper, Form, Label, Input, Button } from './Movies.styled';
import { getMovies } from 'services/movies-api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Error } from 'components/Error/Error';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getMovies(searchQuery)
      .then(setMovies)
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  }, [searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearchParams(value !== '' ? { query: value } : {});
    e.target.reset();
  };

  return (
    <section>
      <Wrapper>
        <Form onSubmit={onSubmit} autoComplete="off">
          <Label>
            <Input type="text" name="search" placeholder="Enter movie name" />
          </Label>
          <Button type="submit">Search movie</Button>
        </Form>
        {movies.length !== 0 || error === null ? (
          <MovieList items={movies} />
        ) : (
          <Error message={error} />
        )}
      </Wrapper>
    </section>
  );
}
