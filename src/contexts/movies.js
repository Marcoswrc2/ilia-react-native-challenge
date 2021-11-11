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
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadingNP, setloadingNP] = useState(false);
  const [movies, setMovies] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

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
  async function getSearchedMovies(value, currentPage = 1) {
    setLoadingSearch(true);
    const query = value;
    try {
      let response = await api.get(
        `${SEARCH_BASE_URL}${query}&page=${currentPage}`,
      );
      if (response.data) {
        const result = response.data.results;
        setSearchedMovies([...result]);
      }
    } catch (error) {
      console.error(err);
    } finally {
      setLoadingSearch(false);
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        loadingM,
        getNowPlayingMovies,
        movies,
        loadingNP,
        getSearchedMovies,
        searchedMovies,
        loadingSearch,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}
