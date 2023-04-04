import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./sidebar.scss";

import countries from "../../assets/countries.js";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  const lang = useSelector((store) => store.language.lang);

  useEffect(() => {
    if (location === "/") {
      setSelected(null);
    }
  }, [location]);

  return (
    <div className="sidebar">
      <ul>
        {countries.map((country) => (
          <Link
            className="link"
            to={`/country/${
              lang === "eng" ? country.nameEng : country.namePl
            }-${country.id}`}
            key={country.id}
            onClick={() => {
              setSelected(country.id);
            }}
          >
            <div
              className={`wrapper ${selected === country.id ? "selected" : ""}`}
            >
              <li>
                <div>
                  <img src={country.flag} alt="flag" />
                  <span>
                    {lang === "eng" ? country.nameEng : country.namePl}
                  </span>
                </div>
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
