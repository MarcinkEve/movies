import React from "react";
import "./alert.css";

const Alert = ({ loginUser, loginPass, setAlert }) => {
  return (
    <>
      <div className="alert-modal">
        <div className="alert-modal__close">
          <button
            onClick={() => setAlert(0)}
            type="button"
            className="alert-modal__close--button"
          >
            <span aria-hidden="true" className="alert-modal__close--button-X">
              &times;
            </span>
          </button>
        </div>
        <div className="alert-modal__data">
          <div className="alert-modal__data--line"><span>Demo username:</span> {loginUser}</div>
          <div className="alert-modal__data--line"><span>Demo password:</span> {loginPass}</div>
        </div>
      </div>
    </>
  );
};

export default Alert;
