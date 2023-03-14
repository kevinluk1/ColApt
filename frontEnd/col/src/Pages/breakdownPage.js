import React, { useEffect, useState } from "react";
import BackPopUp from "../Components/backPopUp";
import BreakdownTable from "../Components/breakdownTable";
function BreakdownPage(props) {
  const [objectData, setObjectData] = useState(null);
  useEffect(() => {
    if (props.responseData) {
      setObjectData(props.responseData);
    }
  }, [props.responseData, objectData]);
  return (
    <div>
      <h3> Cost of Groceries: </h3>
      <BreakdownTable data={objectData} />
      <BackPopUp />
    </div>
  );
}
export default BreakdownPage;
