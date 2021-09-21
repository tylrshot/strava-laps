import React from 'react';
import logo from './logo.svg';
import './App.css';
import AnalysisChart from './components/AnalysisChart';
import Lap from './common/Lap';

function App() {
  let laps: Lap[] = [{distance: 5, time: 3}]
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AnalysisChart laps={laps}></AnalysisChart>
    </div>
  );
}

export default App;
