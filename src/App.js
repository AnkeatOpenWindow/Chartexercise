
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


function App() {
  return (
    <div className="App">
      <div style={{width: 900}}>
        <h1>ChartOne</h1>
        <BarChart/>
      </div>

      <div style={{width: 900}}>
      <h1>ChartTwo</h1>
        <LineChart/>
      </div>

      <div style={{width: 500}}>
      <h1>ChartThree</h1>
        <DoughnutChart/>
      </div>

      <div style={{width: 500}}>
      <h1>ChartFour</h1>
        <PieChart/>
      </div>

      <div style={{width: 900}}>
      <h1>ChartFive</h1>
        <RadarChart/>
      </div>

      
    </div>
  );
}

export default App;



