import { Fade } from "react-slideshow-image";

import SlideOne from "../../assets/images/slide-1.jpg";
import SlideTwo from "../../assets/images/slide-2.jpg";
import SlideThree from "../../assets/images/slide-3.jpg";
import SlideFour from "../../assets/images/slide-4.jpg";

import "./slider.scss";

const SliderComponent = ({ TagLine }) => {
  return TagLine ? (
    <div className="slide-container">
      <Fade>
        {[SlideOne, SlideTwo, SlideThree, SlideFour].map((slide, index) => {
          return (
            <div key={index} className="each-fade">
              <div className="image-container">
                <div className="image-container-inner">
                  <h1>{TagLine}</h1>
                </div>
                <img src={slide} alt="Westville Associates Service" />
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  ) : null;
};

export default SliderComponent;
