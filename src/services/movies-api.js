import axios from 'axios';

const API_KEY = '1c308592d719c7668d47adc63622f209';
const baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const resp = await axios.get(
    `${baseURL}trending/movie/week?api_key=${API_KEY}`
  );
  const result = await resp.data.results;
  return result;
}

export async function getMovies(query) {
  // const searchParams = {
  //   api_key: API_KEY,
  //   query: query,
  // };
  const obj = {
    method: 'get',
    url: `${baseURL}search/movie`,
    params: {
      api_key: API_KEY,
      query: query,
    },
  };

  // const resp = await axios.get(
  //   `${baseURL}search/movie?api_key=${API_KEY}&query=${query}`
  // );
  const resp = await axios(obj);
  const result = await resp.data.results;
  return result;
}

export async function getMoviesById(id) {
  const resp = await axios.get(`${baseURL}movie/${id}?api_key=${API_KEY}`);
  const result = await resp.data;
  return result;
}

export async function getMoviesCast(id) {
  const resp = await axios.get(
    `${baseURL}movie/${id}/credits?api_key=${API_KEY}`
  );
  const result = await resp.data.cast;
  return result;
}

export async function getMoviesReviews(id) {
  const resp = await axios.get(
    `${baseURL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  const result = await resp.data.results;
  return result;
}
