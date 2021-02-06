export const Movie = ({ poster, children }) => (
  <div className="movie">
    <div className="img-wrapper">
      <img src={poster} alt={children} width="314" height="450" />
    </div>
    <p className="title">Film adı: {children}</p>
  </div>
);
