import { Movie } from '../Movie/index';

export const Movies = (props) => {
  return (
    <div className="movies">
      {props.movies.map((movie) => (
        <Movie key={movie.id} {...movie}>
          {movie.title ? movie.title : movie.name}
        </Movie>
      ))}
    </div>
  );
};
