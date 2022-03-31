import '../styles/layout/Collections.scss';
import { Data } from '../variables/Data';
import { useState } from 'react';
import { VscChevronLeft } from 'react-icons/vsc';
import { VscChevronRight } from 'react-icons/vsc';

const Collections = ({slides}) => {
  const [slide, setSlide] = useState(0);
  const length = slides.length;
  //console.log(slides);

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
   
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className="carousel">
      <div className="arrows">
        <VscChevronLeft className="arrow-l" onClick={prevSlide} />
        <VscChevronRight className="arrow-r" onClick={nextSlide} />
      </div>

      {Data.map((item, index) => {
        return (
          <div key={index}>
              
            {index === slide && (
              <img src={item.img} alt="" className="carousel_img" />
            )}
        
          </div>
        );
      })}
    </div>
  );
};
export default Collections;
