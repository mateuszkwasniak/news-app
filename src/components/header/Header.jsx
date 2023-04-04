import React, { useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchType } from "../../redux/newsSlice";
import { switchLang } from "../../redux/languageSlice";

const Header = () => {
  const type = useSelector((store) => store.news.type);
  const lang = useSelector((store) => store.language.lang);
  const modalShow = useSelector((store) => store.modal.show);

  const location = useLocation();
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState({
    smile: false,
    lang: false,
  });

  return (
    <div className={`header ${modalShow ? "behind" : ""}`}>
      <Link to="/">
        <div className="logoWrapper">
          <span className="logo">NewsApp</span>
          <img src="/world.png" alt="uranus" />
        </div>
      </Link>
      <div className="buttons">
        <div className="btnWrapper">
          <button
            onClick={() => {
              setShowPopup((prev) => {
                return { lang: !prev.lang, smile: false };
              });
            }}
          >
            <img src="/language.png" alt="language"></img>
          </button>
          {showPopup.lang && (
            <div className="popup">
              <div
                className={`clickable ${lang === "eng" ? "selected" : ""}`}
                onClick={() => {
                  dispatch(switchLang("eng"));
                  setShowPopup({ lang: false, smile: false });
                }}
              >
                <img src="/united-states.png" alt="flag" />
                <span>
                  English {"("}US{")"}
                </span>
              </div>
              <div
                className={`clickable ${lang === "pl" ? "selected" : ""}`}
                onClick={() => {
                  dispatch(switchLang("pl"));
                  setShowPopup({ lang: false, smile: false });
                }}
              >
                <img src="/poland.png" alt="flag" />
                <span>
                  Polski {"("}PL{")"}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="btnWrapper">
          <button
            className="popupBtn"
            role="popupbtn"
            onClick={() => {
              setShowPopup((prev) => {
                return { smile: !prev.smile, lang: false };
              });
            }}
          >
            <img src="/question.png" alt="question" />
          </button>
          {showPopup.smile && (
            <div className="popup" data-testid="popup">
              <div>
                <img src="/smile.png" alt="smile" />
                <span>{lang === "eng" ? "Styling" : "Stylizacja"}</span>
              </div>
              <div>
                <img src="/sad.png" alt="anguish" />
                <span>{lang === "eng" ? "Testing" : "Testowanie"}</span>
              </div>
            </div>
          )}
        </div>

        {location.pathname !== "/" && (
          <button
            data-testid="newstype"
            onClick={() => {
              type === "list"
                ? dispatch(switchType("tiles"))
                : dispatch(switchType("list"));
              setShowPopup({ lang: false, smile: false });
            }}
          >
            <img
              src={type === "list" ? "/tiles.png" : "/list.png"}
              alt="switch"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
