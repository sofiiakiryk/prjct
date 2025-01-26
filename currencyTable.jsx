import React from "react";
import { Line } from "react-chartjs-2";
import "./Table.css";
// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

const CurrencyTable = () => {
  const data = {
    labels: ["04.01.19", "05.01.19", "06.01.19", "07.01.19"],
    datasets: [
      {
        label: "USD Purchase",
        data: [27.55, 27.6, 27.58, 27.55],
        borderColor: "#4caf50",
        fill: false,
      },
      {
        label: "USD Sale",
        data: [27.65, 27.67, 27.66, 27.65],
        borderColor: "#2196f3",
        fill: false,
      },
      {
        label: "EUR Purchase",
        data: [30.0, 30.05, 30.02, 30.0],
        borderColor: "#f44336",
        fill: false,
      },
      {
        label: "EUR Sale",
        data: [30.1, 30.12, 30.11, 30.1],
        borderColor: "#ff9800",
        fill: false,
      },
    ],
  };

  return (
    <div className="container">
      <div className="balance">
        <h2>Your Balance</h2>
        <p>₴ 24,000.00</p>
      </div>
      <div className="currency-table">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>27.55</td>
              <td>27.65</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>30.00</td>
              <td>30.10</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="chart">
        <Line data={data} />
      </div> */}
    </div>
  );
};

export default CurrencyTable;
// import React from "react";
// import { Line } from "react-chartjs-2";
// import "./Table.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Реєстрація шкал та елементів для Chart.js
// ChartJS.register(
//   CategoryScale, // Це шкала, яка відповідає за тип "category"
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const CurrencyTable = () => {
//   const data = {
//     labels: ["04.01.19", "05.01.19", "06.01.19", "07.01.19"],
//     datasets: [
//       {
//         label: "USD Purchase",
//         data: [27.55, 27.6, 27.58, 27.55],
//         borderColor: "#4caf50",
//         fill: false,
//       },
//       {
//         label: "USD Sale",
//         data: [27.65, 27.67, 27.66, 27.65],
//         borderColor: "#2196f3",
//         fill: false,
//       },
//       {
//         label: "EUR Purchase",
//         data: [30.0, 30.05, 30.02, 30.0],
//         borderColor: "#f44336",
//         fill: false,
//       },
//       {
//         label: "EUR Sale",
//         data: [30.1, 30.12, 30.11, 30.1],
//         borderColor: "#ff9800",
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="container">
//       <h1>Money Guard</h1>
//       <div className="balance">
//         <h2>Your Balance</h2>
//         <p>₴ 24,000.00</p>
//       </div>
//       <div className="currency-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Currency</th>
//               <th>Purchase</th>
//               <th>Sale</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>USD</td>
//               <td>27.55</td>
//               <td>27.65</td>
//             </tr>
//             <tr>
//               <td>EUR</td>
//               <td>30.00</td>
//               <td>30.10</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="chart">
//         <Line data={data} />
//       </div>
//     </div>
//   );
// };

// export default CurrencyTable;
