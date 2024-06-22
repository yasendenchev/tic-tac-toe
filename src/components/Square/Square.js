import React from 'react';
import "./Square.css";


const Square = ({value, onSquareClick}) => {
   return <button className="square" onClick={onSquareClick}>{value}</button>
};

Square.propTypes = {};

export default Square;
