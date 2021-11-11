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
} from '../services/api';

const MoviesContext = createContext();

export const MoviesProvider = ({children}) => {
  const [loadingM, setLoadingM] = useState(false);
  const [movies, setMovies] = useState(false);

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

  return (
    <MoviesContext.Provider
      value={{
        loadingM,
        getLatestMovies,
        movies,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}
