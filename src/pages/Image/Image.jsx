import React from "react";
import Button from "../../components/Button/Button";
import { ReactComponent as Back } from "../../svg/back.svg";
import "./Image.scss";
import { ReactComponent as ImageSVG } from "../../svg/image.svg";
import { ReactComponent as CameraSVG } from "../../svg/camera.svg";
import { useSpring, animated } from "react-spring";
import usePrevNavigate from "../../hooks/usePrevNavigate";

function Image() {
  const navigate = usePrevNavigate();

  const goToResult = () => {
    navigate("/result");
  };

  const springs = useSpring({
    from: {
      x: "0%",
    },
    to: async (next) => {
      while (true) {
        await next({ x: "100%" });
        await next({ x: "0%" });
      }
    },
    config: {
      duration: 1000,
    },
  });

  return (
    <div className="ImagePage">
      <div className="container">
        <main className="ImagePage__content">
          <Button
            className={"goBackButton"}
            onClick={() => window.history.back()}
          >
            <Back width={24} /> Go Back
          </Button>

          <div className="ImagePage__preview">
            <img src="R.jpg" alt="img" />
            <animated.img
              src="T.jpg"
              alt="img"
              style={{
                ...springs,
              }}
            />
          </div>

          <div className="buttons">
            <div className="blurButton" onClick={() => goToResult()}>
              <ImageSVG height={80} fill="#fff" />
              Choose photo from gallery
            </div>
            <div className="blurButton" onClick={() => goToResult()}>
              <CameraSVG height={80} fill="#fff" />
              Take photo with camera
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Image;
