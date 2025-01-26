// import React, { useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import chartData from "./chartData.json";
// import "./home-statistics.css";
// import Menu from "./statistics-menu";
// // import Menu from "./Statistics-menu";

// const COLORS = [
//   "#81E1FF",
//   "rgba(0, 173, 132, 1)",
//   "rgba(254, 208, 87, 1)",
//   "rgba(255, 216, 208, 1)",
//   "#FD9498",
//   "rgba(110, 120, 232, 1)",
// ];

// const HomeStatistics = () => {
//   const [year, setYear] = useState("2022");
//   const [month, setMonth] = useState("March");

//   const currentMonthData = chartData[year]?.[month] || {};
//   const categories = Array.isArray(currentMonthData.categories)
//     ? currentMonthData.categories
//     : [];
//   const totalIncome = currentMonthData.Income || 0;
//   const totalExpenses = currentMonthData.Expenses || 0;

//   const totalAmount = categories.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <div>
//       <Menu />
//       <div>
//         <div className="selectWrapper">
//           <select
//             className="select"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           >
//             {Object.keys(chartData[year] || {}).map((month) => (
//               <option key={month} value={month}>
//                 {month}
//               </option>
//             ))}
//           </select>

//           <select
//             className="select"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           >
//             {Object.keys(chartData).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         <h2 className="statisticsTitle">Statistics</h2>
//         <div className="statisticsContainer">
//           <div className="chartContainer">
//             <PieChart width={300} height={300}>
//               <Pie
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={80}
//                 outerRadius={120}
//                 fill="#8884d8"
//                 label={false}
//                 data={categories}
//               >
//                 {categories.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//             <div className="chartTotal">₴{totalAmount.toLocaleString()}</div>
//           </div>

//           <div className="legend">
//             {categories.map((item, index) => (
//               <div className="legendItem" key={index}>
//                 <span
//                   className="legendColor"
//                   style={{
//                     backgroundColor: COLORS[index % COLORS.length],
//                   }}
//                 ></span>
//                 <span>{item.name}:</span>
//                 <span>{item.value.toLocaleString()} </span>
//               </div>
//             ))}{" "}
//             <span>Income: ₴{totalIncome.toLocaleString()}</span>
//             <span>Expenses: ₴{totalExpenses.toLocaleString()}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeStatistics;
// import React, { useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import chartData from "./chartData.json";
// import "./home-statistics.css";
// import Menu from "./statistics-menu.jsx";

// const COLORS = [
//   "#81E1FF",
//   "rgba(0, 173, 132, 1)",
//   "rgba(254, 208, 87, 1)",
//   "rgba(255, 216, 208, 1)",
//   "#FD9498",
//   "rgba(110, 120, 232, 1)",
// ];

// const HomeStatistics = () => {
//   const [year, setYear] = useState("2022");
//   const [month, setMonth] = useState("March");

//   const currentMonthData = chartData[year]?.[month] || {};
//   const categories = Array.isArray(currentMonthData.categories)
//     ? currentMonthData.categories
//     : [];
//   const totalIncome = currentMonthData.Income || 0;
//   const totalExpenses = currentMonthData.Expenses || 0;

//   const totalAmount = categories.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <div className="home-statistics">
//       <Menu
//         data={{
//           headerTitle: "Statistics Dashboard",
//           balance: 10000,
//           currencyRates: [
//             { currency: "USD", purchase: 40.5, sale: 41.2 },
//             { currency: "EUR", purchase: 43.1, sale: 44.0 },
//           ],
//         }}
//         goToStatisticsHome={() => console.log("Go to statistics")}
//       />
//       <div className="content">
//         <div className="selectWrapper">
//           <select
//             className="select"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           >
//             {Object.keys(chartData[year] || {}).map((month) => (
//               <option key={month} value={month}>
//                 {month}
//               </option>
//             ))}
//           </select>

//           <select
//             className="select"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           >
//             {Object.keys(chartData).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         <h2 className="statisticsTitle">Statistics</h2>
//         <div className="statisticsContainer">
//           <div className="chartContainer">
//             <PieChart width={300} height={300}>
//               <Pie
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={80}
//                 outerRadius={120}
//                 fill="#8884d8"
//                 label={false}
//                 data={categories}
//               >
//                 {categories.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//             <div className="chartTotal">₴{totalAmount.toLocaleString()}</div>
//           </div>

//           <div className="legend">
//             {categories.map((item, index) => (
//               <div className="legendItem" key={index}>
//                 <span
//                   className="legendColor"
//                   style={{
//                     backgroundColor: COLORS[index % COLORS.length],
//                   }}
//                 ></span>{" "}
//                 <div>
//                   {" "}
//                   <span className="legend-item">{item.name}:</span>{" "}
//                 </div>
//                 <div className="leg-num-div">
//                   <span className="legend-item-num">
//                     {item.value.toLocaleString()}{" "}
//                   </span>
//                 </div>
//               </div>
//             ))}
//             <div>
//               <span>Income: ₴{totalIncome.toLocaleString()}</span>
//             </div>
//             <div>
//               <span>Expenses: ₴{totalExpenses.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeStatistics;

import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import chartData from "./chartData.json";
import "./home-statistics.css";
import Menu from "./statistics-menu.jsx";
import { useLocation } from "react-router-dom";

const COLORS = [
  "#81E1FF",
  "rgba(0, 173, 132, 1)",
  "rgba(254, 208, 87, 1)",
  "rgba(255, 216, 208, 1)",
  "#FD9498",
  "rgba(110, 120, 232, 1)",
];

const HomeStatistics = () => {
  const { state } = useLocation();
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("March");

  const currentMonthData = chartData[year]?.[month] || {};
  const categories = Array.isArray(currentMonthData.categories)
    ? currentMonthData.categories
    : [];
  const totalIncome = currentMonthData.Income || 0;
  const totalExpenses = currentMonthData.Expenses || 0;

  const totalAmount = categories.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="home-statistics">
      <Menu
        data={{
          headerTitle: "Statistics Dashboard",
          balance: 10000,
          currencyRates: [
            { currency: "USD", purchase: 40.5, sale: 41.2 },
            { currency: "EUR", purchase: 43.1, sale: 44.0 },
          ],
        }}
        goToStatisticsHome={() => console.log("Go to statistics")}
      />

      <div className="content">
        {state?.emailUsername && (
          <div className="emailUsernameDisplay">
            <span>{state.emailUsername}</span>
          </div>
        )}
        <div className="header"></div>
        <div className="statisticsContainer">
          <h2 className="statisticsTitle">Statistics</h2>
          <div className="selectWrapper">
            <select
              className="select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {Object.keys(chartData[year] || {}).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {Object.keys(chartData).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="chartAndLegendContainer">
            <div className="chartContainer">
              <PieChart width={300} height={300}>
                <Pie
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  label={false}
                  data={categories}
                >
                  {categories.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="chartTotal">₴{totalAmount.toLocaleString()}</div>
            </div>

            <div className="legend">
              {categories.map((item, index) => (
                <div className="legendItem" key={index}>
                  <span
                    className="legendColor"
                    style={{
                      backgroundColor: COLORS[index % COLORS.length],
                    }}
                  ></span>{" "}
                  <div>
                    <span className="legend-item">{item.name}:</span>{" "}
                  </div>
                  <div className="leg-num-div">
                    <span className="legend-item-num">
                      {item.value.toLocaleString()}{" "}
                    </span>
                  </div>
                </div>
              ))}
              <div>
                <span>Income: ₴{totalIncome.toLocaleString()}</span>
              </div>
              <div>
                <span>Expenses: ₴{totalExpenses.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatistics;

// import React, { useState } from "react";
// import { PieChart, Pie, Cell } from "recharts";
// import chartData from "./chartData.json";
// import "./home-statistics.css";
// import Menu from "./statistics-menu.jsx";
// import { useLocation } from "react-router-dom";

// const COLORS = [
//   "#81E1FF",
//   "rgba(0, 173, 132, 1)",
//   "rgba(254, 208, 87, 1)",
//   "rgba(255, 216, 208, 1)",
//   "#FD9498",
//   "rgba(110, 120, 232, 1)",
// ];

// const HomeStatistics = () => {
//   const { state } = useLocation();
//   const [year, setYear] = useState("2022");
//   const [month, setMonth] = useState("March");

//   const currentMonthData = chartData[year]?.[month] || {};
//   const categories = Array.isArray(currentMonthData.categories)
//     ? currentMonthData.categories
//     : [];
//   const totalIncome = currentMonthData.Income || 0;
//   const totalExpenses = currentMonthData.Expenses || 0;

//   const totalAmount = categories.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <div className="home-statistics">
//       <Menu
//         data={{
//           headerTitle: "Statistics Dashboard",
//           balance: 10000,
//           currencyRates: [
//             { currency: "USD", purchase: 40.5, sale: 41.2 },
//             { currency: "EUR", purchase: 43.1, sale: 44.0 },
//           ],
//         }}
//         goToStatisticsHome={() => console.log("Go to statistics")}
//       />
//       <div className="content">
//         <div className="selectWrapper">
//           <select
//             className="select"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           >
//             {Object.keys(chartData[year] || {}).map((month) => (
//               <option key={month} value={month}>
//                 {month}
//               </option>
//             ))}
//           </select>

//           <select
//             className="select"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           >
//             {Object.keys(chartData).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         <h2 className="statisticsTitle">Statistics</h2>

//         {state?.emailUsername && (
//           <div className="emailUsernameDisplay">
//             <span>{state.emailUsername}</span>
//           </div>
//         )}

//         <div className="statisticsContainer">
//           <div className="chartContainer">
//             <PieChart width={300} height={300}>
//               <Pie
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={80}
//                 outerRadius={120}
//                 fill="#8884d8"
//                 label={false}
//                 data={categories}
//               >
//                 {categories.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//             <div className="chartTotal">₴{totalAmount.toLocaleString()}</div>
//           </div>

//           <div className="legend">
//             {categories.map((item, index) => (
//               <div className="legendItem" key={index}>
//                 <span
//                   className="legendColor"
//                   style={{
//                     backgroundColor: COLORS[index % COLORS.length],
//                   }}
//                 ></span>{" "}
//                 <div>
//                   {" "}
//                   <span className="legend-item">{item.name}:</span>{" "}
//                 </div>
//                 <div className="leg-num-div">
//                   <span className="legend-item-num">
//                     {item.value.toLocaleString()}{" "}
//                   </span>
//                 </div>
//               </div>
//             ))}
//             <div>
//               <span>Income: ₴{totalIncome.toLocaleString()}</span>
//             </div>
//             <div>
//               <span>Expenses: ₴{totalExpenses.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeStatistics;
