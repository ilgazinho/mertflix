const IMG_API = `https://image.tmdb.org/t/p/w500/`;

export const Movie = ({ poster, children }) => (
  <div className="movie">
    <div className="img-wrapper">
      <img src={IMG_API + poster} alt={children} />
    </div>
    <p className="title">{children}</p>
  </div>
);
