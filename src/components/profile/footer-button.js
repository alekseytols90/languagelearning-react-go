import React from "react";

const FooterButton = (props) => {
  return (
    <div className="footer-button">
      {props.isComplete ? (
        <div className="next-button" onClick={props.onClickComplete}>
          Complete
        </div>
      ) : (
        <div className="next-button" onClick={props.onClickNext}>
          Next
        </div>
      )}
    </div>
  );
};

export default FooterButton;
