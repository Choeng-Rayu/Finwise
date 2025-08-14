import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Analyst from './pages/Analyst';
import Dashboard from './pages/Dashboard';
import BudgetPlan from './pages/BudgetPlan';

function App() {
  return (
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/BudgetPlan' element={< BudgetPlan />} />
      <Route path='/Dashboard' element={< Dashboard />} />
      <Route path='/Analyst' element={< Analyst />} />
    </Routes>
  );
};

export default App;
