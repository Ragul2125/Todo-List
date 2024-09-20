import React from "react";
import empty from "../e.gif";
import Elements from "./elements";

function Right({ text, setText }) {

  const handleDelete = (index) => {
    const newValues = [...text];
    newValues.splice(index, 1);
    setText(newValues);
  };

  return (
    <>
      <div className="container2" id="rightitems">
        {text.length === 0 ? (
          <div className="right" id="right">
            <div className="emptyimg">
              <img src={empty} alt="Empty" />
              <div className="content">
                <h2>
                  Your <q>Todo List</q> is empty.
                </h2>
                <h3>It's time to recharge.</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="afterclick" id="afterclick">
            {text.map((item, index) => (
              <Elements
                key={index}
                index={index}
                text={item}
                deletecontent={() => handleDelete(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Right;
