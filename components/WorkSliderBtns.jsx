"use client";
//dependencies
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

//main
const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={iconsStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
