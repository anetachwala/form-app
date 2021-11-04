import { useState } from "react";
import "../styles/Field.css";
import starIconFull from "../assets/icon-star-full.svg";
import starIconEmpty from "../assets/icon-star-empty.svg";

function Field(props) {
  const [active, setToggle] = useState(props.star);

  const handleOnClick = () => {
    setToggle((state) => !state);
  };

  return (
    <div className="Field">
      <button onClick={handleOnClick} className="Field__button">
        {props.text} <img src={active ? starIconFull : starIconEmpty} alt="" />
      </button>
    </div>
  );
}

export default Field;
