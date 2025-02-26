import React, { createContext, useContext, useState } from "react";
import Cell from "./Cell";

const GridContext = createContext();

const GridProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);
  const onCount = cells.filter(Boolean).length;

  const toggleCell = (index) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[index] = !newCells[index];
      return newCells;
    });
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      <h2>Count: {onCount}</h2>
      <div className="grid">{children}</div>
    </GridContext.Provider>
  );
};

const Grid = () => {
  return (
    <GridProvider>
      {[0, 1, 2, 3].map((index) => (
        <Cell key={index} index={index} />
      ))}
    </GridProvider>
  );
};

export default Grid;
export { GridContext };
