// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MoneyGuard from "./components/MoneyGuard.jsx";
// import Statistics from "./components/Statistics.jsx";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoneyGuard from "./components/MoneyGuard.jsx";
import Statistics from "./components/Statistics.jsx";
import HomeStatistics from "./components/home-statistics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoneyGuard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="/statistics/home-statistics"
          element={<HomeStatistics />}
        />
      </Routes>
    </Router>
  );
}

export default App;
