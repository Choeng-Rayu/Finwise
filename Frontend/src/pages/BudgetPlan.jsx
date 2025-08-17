import React from "react";
import Layout from "../components/Layout";
import "../index.css";
import { Plus, Smartphone, BriefcaseBusiness } from "lucide-react";
import { useState } from "react";

const BudgetPlan = () => {
  const total = 1999.73;
  const spent = 1000.0;
  const remain = total - spent;

  // Customizable colors
  const colors = {
    primary: "from-indigo-500 to-purple-500",
    secondary: "from-pink-500 to-orange-500",
    accent: "from-green-500 to-teal-500",
  };

  const cards = [
    {
      title: "Total Budget",
      amount: `$${total}`,
      change: "+ 6%",
      changeColor: "bg-green-100 text-green-700",
      subtitle: "from last month",
      color: colors.primary,
    },
    {
      title: "Expense",
      amount: `$${spent}`,
      change: "- 3%",
      changeColor: "bg-red-100 text-red-700",
      subtitle: "from last month",
      color: colors.secondary,
    },
    {
      title: "Remaining Balance",
      amount: `$${remain}`,
      change: "- 2%",
      changeColor: "bg-yellow-100 text-yellow-700",
      subtitle: "from last month",
      color: colors.accent,
    },
  ];

  const [tab, setTab] = useState("overview");

  const expenseCategories = [
    { name: "Food", budget: 150, todaySpent: 17.55, remain: 75.78, status: "on track"},
    { name: "Entertainment", budget: 75, todaySpent: 5.00, remain: 46.50, status: "on track"},
    { name: "Transport", budget: 50, todaySpent: 3.50, remain: 39.23, status: "on track"},
    { name: "Shopping", budget: 100, todaySpent: 0.00, remain: 86.00, status: "on track"},
    { name: "Learning", budget: 50, todaySpent: 20, remain: 6, status: "near limit"},
  ]

  // Goals 
  const goals = [
    { name: "iphone 19", startDate: "01 July 2025", endDate: "12 Dec 2025", totalCost: 2000, saved: 1000, icon: <Smartphone size={20} className="text-gray-500" />},
    { name: "MacBook Pro", startDate: "15 Aug 2025", endDate: "25 Feb 2026", totalCost: 3799, saved: 259.50, icon: <Smartphone size={20} className="text-gray-500" />},
    { name: "Khmer New Year Trip", startDate: "07 Oct 2025", endDate: "10 April 2026", totalCost: 700, saved: 28.82, icon: <BriefcaseBusiness size={20} className="text-gray-500" />},
  ];

  const budgetProgressColor = (progress) => {
    if ( progress < 50 ) {
      return `hsl(${120 - (progress * 1.2)}, 100%, 45%)`;
    }
    else {
      return `hsl(${60 - ((progress - 50) * 1.2)}, 100%, 50%)`;
    }
  }

  return (
    <Layout>
      <div className="p-6 space-y-8">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${card.color} rounded-xl shadow-lg p-6 text-white transform transition duration-200 hover:scale-105`}
            >
              <h2 className="text-lg font-medium opacity-90">{card.title}</h2>
              <p className="text-4xl font-bold mt-2">{card.amount}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm opacity-80">{card.subtitle}</span>
                <span
                  className={`${card.changeColor} px-2 py-0.5 rounded text-xs font-medium`}
                >
                  {card.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Goals Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">My Goals</h3>

            <div className="space-y-4 flex-1">
              {goals.map((goal, i) => {
                const progress = (goal.saved / goal.totalCost) * 100;
                return (
                  <div
                    key={i}
                    className="border rounded-lg p-4 hover:shadow-md hover:scale-[1.01] transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {goal.icon}
                        <div>
                          <p className="font-medium text-gray-800">{goal.name}</p>
                          <p className="text-xs text-gray-400">
                            {goal.startDate} → {goal.endDate}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-gray-600">
                        ${goal.saved.toLocaleString()} / ${goal.totalCost.toLocaleString()}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-full rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-2 rounded-lg shadow transition">
              <Plus size={18} /> Add Goal
            </button>
          </div>
            {/* Budget Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col">
                {/* Header with tab buttons */}
                <div className="flex items-center justify-between mb-6 mt-[-8px]">                        
                    <h3 className="font-semibold text-lg text-gray-700">Budget</h3>
                    <div className="flex gap-2">
                    {["overview", "detail", "history"].map((t) => (
                        <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-3 py-1 rounded-lg text-sm transition ${
                            tab === t
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Content switcher */}
                <div className="flex-1 overflow-hidden">
                  {tab === "overview" && (
                  <div className="space-y-2">
                    {expenseCategories.map((budgetCategory, i) => {
                      const spent = (budgetCategory.budget - budgetCategory.remain).toFixed(2);
                      const progress = (spent / budgetCategory.budget) * 100;
                      return (
                        <div key={i}>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>{budgetCategory.name}</span>
                          <span>${spent} / ${budgetCategory.budget}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className=" h-full rounded-full transition-all"
                            style={{ 
                              width: `${progress}%`,
                              background: budgetProgressColor(progress),
                            }}
                          ></div>
                        </div>
                        </div>
                      );
                    })}
                    </div>
                    )}

                    {tab === "detail" && (
                    <div className="space-y-2 lg:col-span-2 bg-white rounded-xl">
                        <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="border-b text-gray-500 uppercase text-xs tracking-wider">
                            <tr>
                                <th className="pb-2">Category</th>
                                <th className="pb-2">Monthly Limit</th>
                                <th className="pb-2">Spent Today</th>
                                <th className="pb-2">Remaining</th>
                                <th className="pb-2">Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-700">
                            {expenseCategories.map((budgetCategory, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="py-3 font-medium">{budgetCategory.name}</td>
                                <td>${budgetCategory.budget}</td>
                                <td>${(budgetCategory.budget - budgetCategory.remain).toFixed(2)}</td>
                                <td className="font-semibold text-blue-600">${budgetCategory.remain}</td>
                                <td
                                    className={`${
                                    budgetCategory.status === "on track"
                                        ? "text-green-600"
                                        : "text-red-500"
                                    } font-medium`}
                                >
                                    {budgetCategory.status}
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    )}

                    {tab === "history" && (
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>12 Aug 2025 – Spent $120 (Food)</p>
                        <p>11 Aug 2025 – Spent $50 (Transport)</p>
                        <p>10 Aug 2025 – Spent $300 (Shopping)</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetPlan;
