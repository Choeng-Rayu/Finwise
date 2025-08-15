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
      <Route path='/' element={< BudgetPlan />} />
      <Route path='/home' element={< Home />} />
      <Route path='/budgetPlan' element={< BudgetPlan />} />
      <Route path='/dashboard' element={< Dashboard />} />
      <Route path='/analyst' element={< Analyst />} />
    </Routes>
  );
};

export default App;
