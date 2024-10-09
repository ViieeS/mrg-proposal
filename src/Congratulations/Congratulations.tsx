import React from 'react';
import './Congratulations.css';
import NyancatMusic from '../NyancatMusic';

const Congratulations: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <div className="rainbow">
          <div className="sprite"></div>
        </div>
        <ul className="stars">
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
        </ul>

        <div className="cat">
          <div className="finn-and-jake"></div>
          <div className="tail">
            <div className="sprite"></div>
          </div>
          <div className="feet">
            <div className="sprite"></div>
          </div>
          <div className="poptart"></div>
          <div className="head"></div>
        </div>
      </div>

      <NyancatMusic />
    </>
  );
};

export default Congratulations;
