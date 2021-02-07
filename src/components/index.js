import { useState, useEffect } from 'react';

import { Movies } from './Movies/index';
import { Navbar } from './Navbar/index';

const DISCOVER_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=`;

export const Main = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    fetchMovies(DISCOVER_API);
  }, []);

  const handleSearch = (val) => {
    const query = !val.length ? DISCOVER_API : SEARCH_API + val;
    fetchMovies(query);
  };

  return (
    <div className="main">
      <Navbar handleSearch={handleSearch} />
      <Movies movies={movies} />
    </div>
  );
};
