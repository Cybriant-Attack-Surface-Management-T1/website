import './App.css';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import ReportPage from './pages/ReportPage';
import LookerPage from './pages/LookerPage';
import CodePage from './pages/CodePage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/looker" element={<LookerPage />} />
        <Route path="/code" element={<CodePage />} />
      </Routes>
    </Router>
  );
}

export default App;
