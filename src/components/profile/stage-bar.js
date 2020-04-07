import React from "react";

const StageBar = (props) => {
  return (
    <div id="status" className="mt-5">
      <ul className="status">
        <li className="status">Organization</li>
        <li className={props.stage >= 1 ? "good" : "bad"}>Address</li>
        <li className={props.stage >= 2 ? "good" : "bad"}>Social</li>
        <li className={props.stage >= 3 ? "good" : "bad"}>Language</li>
        <li className={props.stage >= 4 ? "good" : "bad"}>Skills</li>
        <li className={props.stage >= 5 ? "good" : "bad"}>Interests</li>
      </ul>
    </div>
  );
};

export default StageBar;
