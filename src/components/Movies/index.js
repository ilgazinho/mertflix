import { useState, useEffect } from 'react';

import { Movie } from '../Movie/index';

const DISCOVER_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

console.log(DISCOVER_API);

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(DISCOVER_API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie}>
          {movie.title ? movie.title : movie.name}
        </Movie>
      ))}
    </div>
  );
};
