import React from "react";
import "./Result.scss";
import Button from "../../components/Button/Button";
import usePrevNavigate from "../../hooks/usePrevNavigate";

export default function SaveImage() {
  const navigate = usePrevNavigate();

  return (
    <div className="Result">
      <main className="container">
        <div className="Result__image">
          <img src="R.jpg" alt="" />
        </div>
        <div className="buttons">
          <Button className="lg green full">Save</Button>
          <Button className={"lg morePics-btn"} onClick={() => navigate("/images")}>
            More pics
          </Button>
        </div>
      </main>
    </div>
  );
}
