import React from 'react';
import './loader.css';

const Loader = () => {
  return(
    <div className="loader-wrapper">
      <div className="loader-title">CORONA hub</div>
      <div className="loader">
        {[...Array(25).keys()].map((key) => <div key={key}></div>)}
      </div>
	  </div>
  );
}

export default Loader;
