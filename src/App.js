import React, { useEffect, useState } from 'react';
import './style.css';
import movies from './data/movies.json';
import movieGenres from './data/movie-genres.json';
import MovieInfo from './components/MovieInfo/MovieInfo';
import StickyBar from './components/StickyBar/StickyBar';
import GenreModal from './components/GenreModal/GenreModal';

export default function App() {
  // An example of retrieving movie data for a single movie
  // const movieGenres = movies[0];

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // A log of movie data
    console.info('movies:', movies);
    console.info('movieGenres:', movieGenres);
  }, []);

  const [buttonActive, setButtonActive] = useState(
    movieGenres.map((f) => {
      return { ...f, active: false };
    })
  );

  const clearAll = () => {
    if (showModal) {
      alert('please select filters and click apply')
    } else {
      setButtonActive(
        buttonActive.map((f) => {
          f.active = true;
          return f;
        })
      );
    }
  };

  
  useEffect(() => {
    setButtonActive(
      buttonActive.map((f) => {
        f.active = true;
        return f;
      })
    );
  }, []);

  const activeFilterIds = [];
  buttonActive.map((f) => {
    if (f.active) {
      activeFilterIds.push(f.id);
    }
  });

  const onApply = () => {
    setShowModal((prev) => !prev);
  };

  const filteredMovies = movies.filter((m) => {
    return activeFilterIds.some((tagId) => {
        return m.genre_ids.includes(tagId);
    });
  });

  const filteredGenres = [];
  buttonActive.map((f) => {
    if (f.active) {
      filteredGenres.push(f.name);
    }
  });

  return (
    <div className="App">
      <StickyBar
        setShowModal={setShowModal}
        clearAll={clearAll}
        filteredGenres={filteredGenres}
        setButtonActive={setButtonActive}
        buttonActive={buttonActive}
      />
      {filteredMovies.map((filteredMovies, index) => (
        <div key={index}>
          <MovieInfo
            posterPath={filteredMovies.poster_path}
            year={filteredMovies.release_date}
            title={filteredMovies.title}
            overview={filteredMovies.overview}
            buttonActive={buttonActive}
          />
        </div>
      ))}
      <GenreModal
        showModal={showModal}
        onApply={onApply}
        movieGenres={movieGenres}
        buttonActive={buttonActive}
        setButtonActive={setButtonActive}
      />
    </div>
  );
}
