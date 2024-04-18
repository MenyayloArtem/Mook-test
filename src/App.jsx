import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Image from "./pages/Image/Image";
import SaveImage from "./pages/Result/Result";
import { useEffect, useState } from "react";
import { useTransition, a, animated } from "react-spring";
import getAnimation from "./helpers/getAnimation";

function App() {
  const location = useLocation();
  const [animation, setAnimation] = useState(getAnimation(location));

  const transitions = useTransition(location.pathname, {
    ...animation,
  });

  useEffect(() => {
      setAnimation(getAnimation(location));
  }, [location.pathname]);

  return (
    <div
      className="App"
      style={{
        position: "relative",
      }}
    >
      {transitions((styles, item) => {
        return (
          <animated.div
            style={{
              position: "absolute",
              top: 0,
              height: "100vh",
              ...styles,
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
              <Routes location={item}>
                <Route path="/" element={<Home />} />
                <Route path="/image" element={<Image />} />
                <Route path="/result" element={<SaveImage />} />
                <Route path="/images" element={<Home auth={true} />} />
              </Routes>
            </div>
          </animated.div>
        );
      })}
    </div>
  );
}

export default App;
