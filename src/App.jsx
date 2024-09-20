import LeftSide from "./components/Left.jsx";
import RightSide from "./components/Right.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [get, setGet] = useState("");
  const [array, setArray] = useState([]);
  const deleteContent = (id) => {
    setArray(array.filter((value) => value.id !== id));
  };

  /* const newpg=()=>{
    const now=()=>{

    }
  /* const before=documentcument.getElementById("right")
  const after = document.getElementById("afterclick")
  before.style.display="none"
  after.style.display="flex"
  } */

  return (
    <>
      <div className="home">
        <LeftSide
          text={get}
          setGetValue={setGet}
          array={array}
          setArray={setArray}
        />
        <RightSide text={array} setText={setArray} deleteContent={deleteContent} />
      </div>
    </>
  );
}

export default App;
