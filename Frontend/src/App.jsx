import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Analyst from './pages/Analyst';
import Dashboard from './pages/Dashboard';
import BudgetPlan from './pages/BudgetPlan';
import Expense from './pages/Expense';
import Account from './pages/Account';
import Report from './pages/Report';
import Setting from './pages/Setting';

function App() {
  return (
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/home' element={< Home />} />
      <Route path='/budgetPlan' element={< BudgetPlan />} />
      <Route path='/dashboard' element={< Dashboard />} />
      <Route path='/analyst' element={< Analyst />} />
      <Route path='/expense' element={< Expense />} />
      <Route path='/account' element={< Account />} />
      <Route path='/report' element={< Report />} />
      <Route path='/setting' element={< Setting/>} />
    </Routes>
  );
};

export default App;
