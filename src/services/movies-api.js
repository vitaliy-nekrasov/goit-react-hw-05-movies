import axios from 'axios';

const API_KEY = '1c308592d719c7668d47adc63622f209';

export async function getTrendingMovies() {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const result = await resp.data.results;
  return result;
}

export async function getMovies(query) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const result = await resp.data.results;
  return result;
}

export async function getMoviesById(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const result = await resp.data;
  return result;
}

export async function getMoviesCast(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const result = await resp.data.cast;
  return result;
}

export async function getMoviesReviews(id) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const result = await resp.data.results;
  return result;
}
