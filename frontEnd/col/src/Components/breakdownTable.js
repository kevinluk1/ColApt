import React from "react";

function BreakdownTable(props) {
  if (!props.data) {
    return null;
  }
  console.log(props.data["Markets prices"]);

  return (
    <table>
      <thead>
        <tr>
          <th>Layout/Location</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {props.data["Markets prices"].map((item, index) => (
          <tr key={index}>
            <td>{item.Cost}</td>
            <td>{item.Value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BreakdownTable;
