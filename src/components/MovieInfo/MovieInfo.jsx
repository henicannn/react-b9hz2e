import React, { useEffect } from 'react';
import './MovieInfo.scss';
import getMoviePosterURL from '../../utils/get-movie-poster-url';
import movies from '../../data/movies.json';

const defaultProps = {};

const MovieInfo = (props) => {
  const { posterPath, year, title, overview, buttonActive } = props;

  // An example
  const posterURL = getMoviePosterURL(posterPath);


return (
    <div className="MovieInfo">
      <div className="MovieInfo__details">
        <img src={posterURL} />
        <div className="MovieInfo__details-info">
          <div className="MovieInfo__details-info-year">{year}</div>
          <div className="MovieInfo__details-info-title">{title}</div>
          <div className="MovieInfo__details-info-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};

MovieInfo.defaultProps = defaultProps;

export default MovieInfo;
