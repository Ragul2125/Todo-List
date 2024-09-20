import React, { useState } from "react";
import img1 from "../todolist.gif";
function Left({ text, setGetValue, setArray, array ,newdev}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* leftside */}
      <div className="container1" id="leftitems">
        <div className="left">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="contents">
            <h1>Simple TodoList</h1>
          </div>
          {/* input field */}
          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="input-box">
                <input
                  type="text"
                  id="input"
                  placeholder={"What is in your mind..."}
                  onChange={(e) => setGetValue(e.target.value)}
                  value={text}
                ></input>
              </div>
            </div>
            {/* button */}
            <div className="button" onClick={newdev}>
              <button
                type="submit"
                onClick={() => {
                  setArray([...array, text]);
                }}
                className="button-box"
              >
                Add To Do
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Left;
