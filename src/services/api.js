import axios from 'axios';
// THE BASE API URL
const API_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: API_URL,
});

//KEY FROM TMDB DEVELOPER API
const API_KEY = '66a66d6e649ca1e4a60f2227da49911e';

//TRENDING MOVIES
const TRENDING_URL = `${API_URL}trending/movies/week?api_key=${API_KEY}`;

//MOVIES GENRES
const GENRES_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=pt-BR`;

// THE URL WHICH TRIGGERS SEARCH
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=pt-BR&query=`;

// THE URL WHICH TRIGGERS POPULAR MOVIES
const POPULAR_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`;

// UNFORTUNATELY TMDB LIMITS 20 RESULTS PER PAGE, SO RATINGS FILTER WILL BE
// LIMITED TO THAT JUST FOR DEMO.
const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=2`;

// THE BASE URL WHICH TRIGGERS IMAGES
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

// THE SIZE OF MOVIES POSTER IMAGES
const IMAGE_SIZE = 'original';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  TRENDING_URL,
  GENRES_URL,
  api,
};
