import React from 'react';
import { useState } from 'react';
import "./Square.css";


const Square = ({value, onSquareClick}) => {

   const handleClick = () => {
      // if(value === null) {
      //    setValue('x');
      // }
   }

   return <button className="square" onClick={onSquareClick}>{value}</button>
};

Square.propTypes = {};

export default Square;
