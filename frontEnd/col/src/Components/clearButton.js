import React, { useState, useEffect } from "react";
function ClearButton(props) {
  const handleClick = () => {
    props.clearSelections();
  };
  return (
    <div>
      <button onClick={handleClick}>Clear Tables</button>
    </div>
  );
}

export default ClearButton;
