import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BreakdownButton(props) {
  console.log("ajldfjas");
  console.log(props.responseData);
  return (
    <div>
      <h3>(ADVANCED) Cost Breakdown (Groceries, Utilities, etc.,)</h3>
      <Link to="/breakdown">
        <button>City 1</button>
        <button>City 2</button>
      </Link>
    </div>
  );
}

export default BreakdownButton;
