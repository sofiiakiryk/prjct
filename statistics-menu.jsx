// const Menu = () => {
//   return (
//     <div>
//       <div className="header">
//         <h2 className="header-title">{data.headerTitle}</h2>
//         <a href="http://localhost:3000/" className="exit-btn">
//           Exit
//         </a>
//       </div>

//       <div className="sidebar">
//         <Link to="/">Home</Link>{" "}
//         <button onClick={goToStatisticsHome} className="statistics-btn">
//           Statistics
//         </button>{" "}
//         <div className="balance">
//           <h3>Your Balance</h3>
//           <p style={{ fontSize: "24px", fontWeight: "bold" }}>
//             ₴{data.balance}
//           </p>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>Currency</th>
//               <th>Purchase</th>
//               <th>Sale</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.currencyRates.map((rate, index) => (
//               <tr key={index}>
//                 <td>{rate.currency}</td>
//                 <td>{rate.purchase}</td>
//                 <td>{rate.sale}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default Menu;
import React from "react";
import { Link } from "react-router-dom";
import ModalMenu from "./statistics-modal";
import CurrencyTable from "./currencyTable";
// import "./statistics-menu.css";

const Menu = ({ data, goToStatisticsHome }) => {
  return (
    <div className="menu-container">
      {/* <div className="header"> */}
      {/* <h2 className="header-title">"Default Title"</h2> */}

      {/* <ModalMenu /> */}
      {/* </div> */}
      <div className="sidebar">
        <Link to="/">Home</Link>
        <h3 onClick={goToStatisticsHome} className="statistics-btn">
          Statistics
        </h3>
        {/* <div className="balance"> */}
        {/* <h3>Your Balance</h3> */}
        {/* <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            ₴{data?.balance?.toLocaleString() || "0"}
          </p> */}
        {/* </div> */}
        <table className="currency-table">
          {/* <thead> */}
          {/* <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
 <tbody>
            {data?.currencyRates?.map((rate, index) => (
              <tr key={index}>
                <td>{rate.currency}</td>
                <td>{rate.purchase}</td>
                <td>{rate.sale}</td>
              </tr> */}
          {/* )) || ( */}
          {/* <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )} */}
          <CurrencyTable />
          {/* </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Menu;
