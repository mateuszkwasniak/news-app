import React, { useEffect, useState } from "react";
import "./footer.scss";
import currentTime from "../../utils/time.js";
import { useSelector } from "react-redux";
const Footer = ({ articlesNum }) => {
  const [time, setTime] = useState(currentTime(new Date()));
  const lang = useSelector((store) => store.language.lang);

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(currentTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="footer">
      <div className="pages">
        {articlesNum?.displayed >= 0 && articlesNum?.total >= 0 && (
          <span data-testid="articles">
            {`${articlesNum.displayed}${lang === "eng" ? " out of " : " z "}${
              articlesNum.total
            }`}
          </span>
        )}
      </div>
      <div className="time">
        <img src="/clock.svg" alt="clock"></img>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Footer;
