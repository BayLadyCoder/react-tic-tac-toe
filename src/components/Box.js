import React, { useState } from "react";
import X from "./X";
import O from "./O";
import PropTypes from "prop-types";

const Box = ({ player }) => {
  const [display, setDisplay] = useState("Empty");

  const handleClickBox = () => {
    if (player === "X") {
      setDisplay("X");
    } else if (player === "O") {
      setDisplay("O");
    }
  };

  return (
    <div onClick={() => handleClickBox()} style={styles.box}>
      {display === "X" ? <X /> : display === "O" ? <O /> : <div>Empty</div>}
    </div>
  );
};

const styles = {
  box: {
    width: "200px",
    height: "200px",
    border: "1px solid black",
  },
};

Box.propTypes = {
  player: PropTypes.string.isRequired,
};

export default Box;
