import React from "react";
import Edit from "../assets/svgs/Edit.svg";
import Delete from "../assets/svgs/delete.svg";
const Elements = ({ text ,deletecontent,index}) => {

  return (
    <div className="output-box">
      <div className="check-box">
        <input type="checkbox" /* onClick={addLineThrough} */></input>
      </div>
      <div className="text" id="text">
        <h3>{text}</h3>
      </div>
      <div className="options">
        <div className="edit">
          <img src={Edit}></img>
        </div>
        <div className="delete">
          <img src={Delete} onClick={deletecontent}></img>
        </div>
      </div>
    </div>
  );
};

export default Elements;
