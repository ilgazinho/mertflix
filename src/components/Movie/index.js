const IMG_API = `https://image.tmdb.org/t/p/w500/`;

export const Movie = ({ poster_path, overview, vote_average, children }) => (
  <div className="movie">
    <div className="img-wrapper">
      <img src={IMG_API + poster_path} alt={children} />
    </div>
    <div className="summary">
      <p className="title">{children}</p>
      <div className="rating">
        <div className="icon-wrapper">
          <svg class="icon" id="icon" viewBox="0 0 32 32">
            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          </svg>
        </div>
        <div className="rate">{vote_average}</div>
      </div>
    </div>
  </div>
);
