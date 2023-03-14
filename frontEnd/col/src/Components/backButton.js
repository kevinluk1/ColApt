import React, { useState, useEffect } from "react";


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
