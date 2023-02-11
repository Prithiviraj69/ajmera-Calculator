import React from "react";
import "./styles/styles.css";
import Calculator from "./Components/Calculator/Calculator";
import ResultsTable from './Components/Calculator/Screen/ResultScreen/ResultsTable/ResultsTable'





const app = () => (
  <div className="app">
    <Calculator />
    <ResultsTable />
  </div>
);
export default app;
