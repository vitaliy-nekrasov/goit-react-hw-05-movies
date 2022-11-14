import { useSearchParams } from 'react-router-dom';
import { Wrapper, Form, Label, Input, Button, Text } from './Movies.styled';
import { getMovies } from 'services/movies-api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    getMovies(searchQuery)
      .then(movies => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value.trim();
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
        {isLoading === true && <Loader />}
        {searchQuery !== '' && movies.length === 0 && isLoading === false ? (
          <Text>Sorry but we don`t find movies! :(</Text>
        ) : (
          <MovieList items={movies} />
        )}
      </Wrapper>
    </section>
  );
}
