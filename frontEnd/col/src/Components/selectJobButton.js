import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function SelectJobButton(props) {
  const handleClick = async () => {
    console.log(`Selected Job: ${props.selectedJob}`);

    try {
      const response = await axios.get(
        `http://localhost:5002/?title=${props.selectedJob}`
      );
      console.log(response);
      props.onResponse(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Find Number of Beers you can afford a year!
      </Button>
    </div>
  );
}

export default SelectJobButton;
