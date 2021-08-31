import { Fade } from "react-slideshow-image";

import SlideOne from "../../assets/images/slide-1.jpg";
import SlideTwo from "../../assets/images/slide-2.jpg";

import "./slider.scss";

const SliderComponent = () => {
  return (
    <div className="slide-container">
      <Fade>
        {[SlideOne, SlideTwo].map((slide, index) => {
          return (
            <div key={index} className="each-fade">
              <div className="image-container">
                <img src={slide} alt="Westville Associates Service" />
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default SliderComponent;
