const IMG_API = `https://image.tmdb.org/t/p/w500/`;

export const Movie = ({
  poster_path,
  backdrop_path,
  overview,
  vote_average,
  children,
}) => {
  const getMovieImg = (isPosterPath) => {
    if (isPosterPath) {
      return poster_path === null
        ? 'https://via.placeholder.com/500x750.png'
        : IMG_API + poster_path;
    }
    return backdrop_path === null
      ? {}
      : { backgroundImage: `url(${IMG_API + backdrop_path})` };
  };

  return (
    <div className="movie">
      <div className="img-wrapper">
        <img src={getMovieImg(true)} alt={children} />
      </div>
      <div className="summary">
        <p className="title">{children}</p>
        <div className="rating">
          <div className="icon-wrapper">
            <svg className="icon" id="icon" viewBox="0 0 32 32">
              <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
            </svg>
          </div>
          <div className="rate">{vote_average}</div>
        </div>
      </div>
      <div className="overview" style={getMovieImg(false)}>
        <strong>Overview:</strong>
        <p>{overview}</p>
      </div>
    </div>
  );
};
