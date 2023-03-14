import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BackButton(props) {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}

export default BackButton;
