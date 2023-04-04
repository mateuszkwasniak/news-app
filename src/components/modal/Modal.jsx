import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";
import "./modal.scss";

const Modal = ({ modalInfo }) => {
  const lang = useSelector((store) => store.language.lang);

  const dispatch = useDispatch();

  return (
    <div className="modal" data-testid="modal">
      <div
        className="background"
        onClick={() => {
          dispatch(showModal(false));
        }}
      />
      <div className="info">
        <button
          role="hidemodal"
          onClick={() => {
            dispatch(showModal(false));
          }}
        >
          <img src="/delete.png" />
        </button>
        <span>{modalInfo?.author && `- ${modalInfo?.author} -`}</span>
        <div className="content">
          <p>
            {(modalInfo?.content && modalInfo.content.slice(0, 201)) ||
            lang === "eng"
              ? "Content not available - you can check the source using link down below."
              : "Treść artykułu niedostępna - sprawdź źródło używając linku poniżej"}
          </p>
        </div>
        {modalInfo?.url && (
          <a href={modalInfo?.url} target="_blank">
            <span>{lang === "eng" ? "read more" : "więcej"}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
