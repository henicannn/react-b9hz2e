import React, { useEffect } from 'react';
import './StickyBar.scss';

const defaultProps = {};

const StickyBar = ({ setShowModal, clearAll, filteredGenres, setButtonActive,buttonActive  }) => {
  const onClick = () => {
    setShowModal((prev) => !prev);
    setButtonActive(
      buttonActive.map((f) => {
        f.active = false;
        return f;
      })
    );
  };

  return (
    <div className="StickyBar">
      <button onClick={onClick} className="StickyBar-button">
        FILTERS
      </button>
      <button onClick={clearAll} className="StickyBar-clearButton">
        X CLEAR ALL
      </button>
      <div className="StickyBar-activeGenreWrapper"> 
        {filteredGenres.map((f) => (
          <div className="StickyBar-activeGenreWrapper-activeGenre">{f}</div>
        ))}
      </div>
    </div>
  );
};

StickyBar.defaultProps = defaultProps;

export default StickyBar;
