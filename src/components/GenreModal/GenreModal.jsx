import React, { useState } from "react";
// import movieGenres from '../../data/movie-genres.json';;
import "./GenreModal.scss";

const defaultProps = {};

const GenreModal = ({
  showModal,
  movieGenres,
  onApply,
  buttonActive,
  setButtonActive,
}) => {
  const toggleFilter = (id) => {
    setButtonActive(
      buttonActive.map((f) => {
        if (f.id === id) {
          f.active = !f.active;
          console.log(f.id);
          console.log(buttonActive);
        }
        return f;
      })
    );
  };
  return (
    <>
      {showModal ? (
        <div className="GenreModal">
          <div className="GenreModal-wrapper">
            {movieGenres.map((items, index) => (
              <div key={index} className="GenreModal-genresWrapper" >
                <input
                  type="checkbox"
                  name={items.name}
                  value={items.name}
                  className="GenreModal-genres"
                  id={items.name}
                />
                <label className="GenreModal-genresButton" for={items.name} onClick={() => toggleFilter(items.id)}>{items.name}</label>
              </div>
            ))}
          </div>
          <button onClick={onApply} className="GenreModal-apply">
            APPLY
          </button>
        </div>
      ) : null}
    </>
  );
};

GenreModal.defaultProps = defaultProps;

export default GenreModal;
