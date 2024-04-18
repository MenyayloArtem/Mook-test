import React from "react";
import Button from "../Button/Button";
import { ReactComponent as CloseSVG } from "../../svg/close.svg";
import "./Modal.scss";

export default function SignIn({ onClose, show, onSignIn }) {
  const signInHandler = () => {
    onSignIn();
    onClose();
  };

  return (
    <div className={`Modal ${show ? "open" : ""}`}>
      <div className="container">
        <CloseSVG
          className="close"
          width={36}
          height={36}
          color="#FC440F"
          onClick={() => onClose()}
        />
        <form action="#" className="form">
          <div className="form__inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <Button className={"signin-button lg green"} onClick={signInHandler}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
