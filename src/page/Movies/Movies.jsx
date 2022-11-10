import { useSearchParams } from 'react-router-dom';
import { Wrapper, Movie, Form, Label, Input, Button } from './Movies.styled';
import { getMovies } from 'services/movies-api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getMovies(searchQuery).then(setMovies);
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
          <Button type="submit">Search film</Button>
        </Form>
        {movies.length === 0 && <Movie />}
        {movies.length > 0 && <MovieList items={movies} />}
      </Wrapper>
    </section>
  );
}
