// import React from "react";
//
// function BreakDisplayTable(props) {
//     console.log("displaytable")
//     console.log(props.responseObject)
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>Cost</th>
//                 <th>Value</th>
//             </tr>
//             </thead>
//             <tbody>
//             {props.responseObject["Rent Per Month prices"].map((item, index) => (
//                 <tr key={index}>
//                     <td>{item.Cost}</td>
//                     <td>{item.Value}</td>
//                 </tr>
//             ))}
//             </tbody>
//             <h3>{(props.responseObject.Note)}</h3>
//         </table>
//     );
// }
//
// export default DisplayTable;