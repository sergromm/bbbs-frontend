import { useEffect } from "react";
import Lottie from "lottie-web";

// eslint-disable-next-line react/prop-types
function Animation({ animationData }) {
  useEffect(() => {
    const container = document.querySelector(".calendar-modal__image");
    const options = {
      container,
      animationData,
    };
    Lottie.loadAnimation(options);
  }, []);
  return <div className="calendar-modal__image" />;
}

export default Animation;
