import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import texts from "../../assets/homeInfo.js";

import "./home.scss";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const lang = useSelector((store) => store.language.lang);

  const setArticlesNum = useOutletContext();

  useEffect(() => {
    setArticlesNum({});
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        if (prev === texts.length - 1) return 0;
        else return prev + 1;
      });
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="home">
      <h1>
        {texts.map((text, idx) => (
          <span
            key={text.eng}
            className={idx === currentTextIndex ? "active" : ""}
          >
            {lang === "eng" ? text.eng : text.pl}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Home;
