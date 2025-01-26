// import React, { useState } from "react";
// import "./statistics.css";
// import data from "./data.json";

// const Statistics = () => {
//   const [transactions, setTransactions] = useState(data.transactions);

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   return (
//     <div>
//       <div className="header">
//         <h2 className="header-title">{data.headerTitle}</h2>
//         {/* <button className="exit-btn">Exit</button> */}
//         <h3 className="userName"></h3>
//         <a href="http://localhost:3000/" className="exit-btn">
//           Exit
//         </a>
//       </div>

//       <div className="sidebar">
//         <a href="#">Home</a>
//         <a href="#">Statistics</a>
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

//       <div className="main-content">
//         <div className="chart-container">
//           {/* <h3 className="chart-title">Spending and Income Chart</h3> */}
//           <canvas id="chart"></canvas>
//         </div>

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.category}</td>
//                   <td>{transaction.comment}</td>
//                   <td>₴{transaction.sum}</td>
//                   <td>
//                     <button></button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;
// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Для навігації між сторінками
// import "./statistics.css";
// import data from "./data.json";

// const Statistics = () => {
//   const [transactions, setTransactions] = useState(data.transactions);

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   return (
//     <div>
//       {/* Заголовок */}
//       <div className="header">
//         <h2 className="header-title">{data.headerTitle}</h2>
//         <h3 className="userName"></h3>
//         <a href="http://localhost:3000/" className="exit-btn">
//           Exit
//         </a>
//       </div>

//       {/* Сайдбар */}
//       <div className="sidebar">
//         <Link to="/">Home</Link>{" "}
//         {/* Кнопка для повернення на головну сторінку */}
//         <a href="#">Statistics</a>
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

//       {/* Основний контент */}
//       <div className="main-content">
//         <div className="chart-container">
//           <canvas id="chart"></canvas>
//         </div>

//         {/* Таблиця транзакцій */}
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.category}</td>
//                   <td>{transaction.comment}</td>
//                   <td>₴{transaction.sum}</td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./statistics.css";
// import data from "./data.json";

// const Statistics = () => {
//   const [transactions, setTransactions] = useState(data.transactions);
//   const navigate = useNavigate();

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   const goToStatisticsHome = () => {
//     navigate("./home-statistics");
//   };

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

//       <div className="main-content">
//         <div className="table-container">
//           {/* <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.category}</td>
//                   <td>{transaction.comment}</td>
//                   <td>₴{transaction.sum}</td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table> */}
//           {/* import React from "react";
// import "./StatisticsList.css";
// import { ColorBlock } from "./ColorBlock";
// import { ColorText } from "./ColorText"; */}

// export const StatisticsList = ({ transactions }) => {
//   let chartVals = [
//     { name: "Products", cost: 0.0, col: "#ebb" },
//     { name: "Car", cost: 0.0, col: "#f99" },
//     { name: "Self care", cost: 0.0, col: "#cbf" },
//     { name: "Child care", cost: 0.0, col: "#67e" },
//     { name: "Household ", cost: 0.0, col: "#45e" },
//     { name: "Education", cost: 0.0, col: "#8ef" },
//     { name: "Leisure", cost: 0.0, col: "#2ca" },
//     { name: "Other", cost: 0.0, col: "#0a8" },
//   ];

//   let expense = 0;
//   let income = 0;
//   let transCost = 0;

//   transactions.map((info, idx) => {
//     if (info.type) {
//       expense += info.sum;
//       transCost = info.sum;
//     } else {
//       income += info.sum;
//       transCost = -info.sum;
//     }
//     chartVals[info.category].cost += transCost;
//   });

//   console.log(chartVals);
//   return (
//     <div>
//       <table className="stats-table">
//         {chartVals.map((info, idx) => (
//           <tr key={idx} className="stats-row">
//             <td width={"5%"}>
//               <ColorBlock $col={info.col} />
//             </td>
//             <td width={"25%"} id="stats-category">
//               {info.name}
//             </td>
//             <td width={"70%"} id="stats-cost">
//               {info.cost}
//             </td>
//           </tr>
//         ))}
//       </table>
//       <h4 className="stats-txt">
//         Expenses: <ColorText $col={"#f88"}>{expense}</ColorText>
//       </h4>
//       <h4 className="stats-txt">
//         Income: <ColorText $col={"#fa8"}>{income}</ColorText>
//       </h4>
//     </div>
//   );
// };
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics; import React, { useState } from "react";

// const Statistics = () => {
//   const [transactions, setTransactions] = useState(data.transactions);
//   const navigate = useNavigate();

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   const goToStatisticsHome = () => {
//     navigate("./home-statistics");
//   };

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

//       <div className="main-content">
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.category}</td>
//                   <td>{transaction.comment}</td>
//                   <td>₴{transaction.sum}</td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table></div>

// </div>

// export default Statistics;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./statistics.css";
// import data from "./data.json";
// import UserModule from "./statMenu";
// // import HomeStatistics from "./home-statistics";
// const Statistics = () => {
//   const [transactions, setTransactions] = useState(
//     data.transactions.map((transaction) => ({
//       ...transaction,
//       sum: parseFloat(transaction.sum),
//     }))
//   );
//   const navigate = useNavigate();

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   function goToStatisticsHome() {
//     return <a href=""> </a>;
//   }

//   return (
//     <div>
//       <div className="header">
//         <h2 className="header-title">{data.headerTitle}</h2>
//         <a href="/" className="exit-btn">
//           Exit
//         </a>
//       </div>

//       <div className="sidebar">
//         <a href="/src">Home</a>{" "}
//         <button onClick={goToStatisticsHome} className="statistics-btn">
//           Statistics
//         </button>{" "}
//         <div className="balance">
//           <h3>Your Balance</h3>
//           <p style={{ fontSize: "24px", fontWeight: "bold" }}>
//             ₴{parseFloat(data.balance).toFixed(2)}
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
//         {/* <UserModule /> */}
//       </div>

//       <div className="main-content">
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index}>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.type}</td>
//                   <td>{transaction.category}</td>
//                   <td>{transaction.comment}</td>
//                   <td>₴{transaction.sum.toFixed(2)}</td>
//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;
// import React, { useState } from "react";
// import "./statistics.css";
// import data from "./data.json";
// // import HomeStatistics from "./home-statistics";

// const Statistics = () => {
//   const [transactions, setTransactions] = useState(
//     data.transactions.map((transaction) => ({
//       ...transaction,
//       sum: parseFloat(transaction.sum),
//     }))
//   );

//   const [currentPage, setCurrentPage] = useState("statistics");

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   const goToStatisticsHome = () => {
//     setCurrentPage("homeStatistics");
//   };

//   const goToStatistics = () => {
//     setCurrentPage("statistics");
//   };

//   return (
//     <div>
//       {currentPage === "statistics" && (
//         <div>
//           <div className="header">
//             <h2 className="header-title">{data.headerTitle}</h2>
//             <a href="/" className="exit-btn">
//               Exit
//             </a>
//           </div>

//           <div className="sidebar">
//             <a href="/src">Home</a>{" "}
//             <button onClick={goToStatisticsHome} className="statistics-btn">
//               Statistics
//             </button>{" "}
//             <div className="balance">
//               <h3>Your Balance</h3>
//               <p style={{ fontSize: "24px", fontWeight: "bold" }}>
//                 ₴{parseFloat(data.balance).toFixed(2)}
//               </p>
//             </div>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Currency</th>
//                   <th>Purchase</th>
//                   <th>Sale</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.currencyRates.map((rate, index) => (
//                   <tr key={index}>
//                     <td>{rate.currency}</td>
//                     <td>{rate.purchase}</td>
//                     <td>{rate.sale}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="main-content">
//             <div className="table-container">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Type</th>
//                     <th>Category</th>
//                     <th>Comment</th>
//                     <th>Sum</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {transactions.map((transaction, index) => (
//                     <tr key={index}>
//                       <td>{transaction.date}</td>
//                       <td>{transaction.type}</td>
//                       <td>{transaction.category}</td>
//                       <td>{transaction.comment}</td>
//                       <td>₴{transaction.sum.toFixed(2)}</td>
//                       <td>
//                         <button
//                           className="delete-btn"
//                           onClick={() => handleDelete(index)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}

//       {currentPage === "homeStatistics" && (
//         <div>
//           {/* <HomeStatistics /> */}

//         </div>
//       )}
//     </div>
//   );
// };

// export default Statistics;

import React, { useState } from "react";
import "./statistics.css";
import data from "./data.json";
import chartData from "./chartData.json";
import { PieChart, Pie, Cell } from "recharts";
import Menu from "./statistics-menu.jsx";
import { useLocation } from "react-router-dom";
import "./home-statistics.css";

const COLORS = [
  "#81E1FF",
  "rgba(0, 173, 132, 1)",
  "rgba(254, 208, 87, 1)",
  "rgba(255, 216, 208, 1)",
  "#FD9498",
  "rgba(110, 120, 232, 1)",
];

const HomeStatistics = () => {
  <div className="header">
    <h2 className="header-title">{data.headerTitle}</h2>
    <a href="/" className="exit-btn">
      Exit
    </a>
  </div>;
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
                  ></span>
                  <div>
                    <span className="legend-item">{item.name}:</span>
                  </div>
                  <div className="leg-num-div">
                    <span className="legend-item-num">
                      {item.value.toLocaleString()}
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

const Statistics = () => {
  const [transactions, setTransactions] = useState(
    data.transactions.map((transaction) => ({
      ...transaction,
      sum: parseFloat(transaction.sum),
    }))
  );

  const [currentPage, setCurrentPage] = useState("statistics");

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const goToStatisticsHome = () => {
    setCurrentPage("homeStatistics");
  };

  const goToStatistics = () => {
    setCurrentPage("statistics");
  };

  return (
    <div>
      {currentPage === "statistics" && (
        <div>
          <div className="header">
            <h2 className="header-title">{data.headerTitle}</h2>
            <a href="/" className="exit-btn">
              Exit
            </a>
          </div>
          <div className="sidebar">
            <a href="/src">Home</a>{" "}
            <button onClick={goToStatisticsHome} className="statistics-btn">
              Statistics
            </button>{" "}
            <div className="balance">
              <h3>Your Balance</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                ₴{parseFloat(data.balance).toFixed(2)}
              </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Purchase</th>
                  <th>Sale</th>
                </tr>
              </thead>
              <tbody>
                {data.currencyRates.map((rate, index) => (
                  <tr key={index}>
                    <td>{rate.currency}</td>
                    <td>{rate.purchase}</td>
                    <td>{rate.sale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="main-content">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Sum</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.date}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.category}</td>
                      <td>{transaction.comment}</td>
                      <td>₴{transaction.sum.toFixed(2)}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {currentPage === "homeStatistics" && <HomeStatistics />}
    </div>
  );
};

export default Statistics;
