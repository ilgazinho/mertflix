import { useState, useEffect } from 'react';

import { Movie } from '../Movie/index';

const BASE_API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=avengers`;

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(BASE_API)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} poster={movie.Poster}>
          {movie.Title}
        </Movie>
      ))}
    </div>
  );
};
