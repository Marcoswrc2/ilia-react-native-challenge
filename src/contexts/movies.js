import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  SEARCH_BASE_URL,
  TRENDING_URL,
  GENRES_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  api,
  PLAYING_URL,
} from '../services/api';

const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {
  const [loadingM, setLoadingM] = useState(false);
  const [loadingNP, setloadingNP] = useState(false);
  const [movies, setMovies] = useState(false);
  const [moviesNP, setMoviesNP] = useState(false);

  async function getLatestMovies() {
    setLoadingM(true);
    try {
      let response = await api.get(TRENDING_URL);
      if (response.data) {
        const result = response.data.results;
        setMovies(result);
      }
    } catch (error) {
      console.error(err);
    } finally {
      setLoadingM(false);
    }
  }

  async function getNowPlayingMovies(currentPage = 1) {
    setloadingNP(true);
    try {
      let response = await api.get(`${PLAYING_URL}&page=${currentPage}`);
      if (response.data) {
        const result = response.data.results;
        setMovies(movies.length > 0 ? [...movies, ...result] : [...result]);
      }
    } catch (error) {
      console.error(err);
    } finally {
      setLoadingM(false);
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        loadingM,
        getLatestMovies,
        getNowPlayingMovies,
        movies,
        loadingNP,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}
