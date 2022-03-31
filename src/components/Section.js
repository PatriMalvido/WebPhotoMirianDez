import React from 'react';
import '../styles/layout/Section.scss';

import section3 from './assets/section3.png';
import section4 from './assets/section4.png';
import section5 from './assets/section5.png';
import section6 from './assets/section6.jpg';
import section7 from './assets/section7.jpg';
import section8 from './assets/section8.png';
import section9 from './assets/section9.png';
import section0 from './assets/section0.png';
import section10 from './assets/section10.png';
import section11 from './assets/section11.png';

const Main = () => {
  return (
    <div className="section">
      <div className="grid__container">

        <div className="cards long">
          <img src={section8} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section4} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section5} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section3} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section11} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section10} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section9} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards long2">
          <img src={section7} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section6} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>

        <div className="cards">
          <img src={section0} alt="" />

          <div className="text">
            <p>It's an Image</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Main;
