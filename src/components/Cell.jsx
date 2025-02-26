import React, { useContext } from "react";
import { GridContext } from "./Grid";

const Cell = ({ index }) => {
  const { cells, toggleCell } = useContext(GridContext);

  return (
    <div
      onClick={() => toggleCell(index)}
      className="cell"
      style={{ backgroundColor: cells[index] ? "black" : "white" }}
    />
  );
};

export default Cell;
