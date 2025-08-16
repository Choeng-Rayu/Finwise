import React from "react";
import Layout from "../components/Layout";
import "../index.css";
import { Plus, Smartphone } from "lucide-react";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expense Category */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">
              Expense Category
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b text-gray-500 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="pb-2">Category</th>
                    <th>Monthly Limit</th>
                    <th>Spent Today</th>
                    <th>Remaining</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {[
                    ["Food", "$150", "$17.55", "$75.78", "on track"],
                    ["Entertainment", "$75", "$5.00", "$46.50", "on track"],
                    ["Transport", "$50", "$3.50", "$39.23", "on track"],
                    ["Shopping", "$100", "$0.00", "$86.00", "on track"],
                  ].map(([cat, limit, spent, remain, status], i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-3 font-medium">{cat}</td>
                      <td>{limit}</td>
                      <td>{spent}</td>
                      <td className="font-semibold text-blue-600">{remain}</td>
                      <td
                        className={`${
                          status === "on track"
                            ? "text-green-600"
                            : "text-red-500"
                        } font-medium`}
                      >
                        {status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Goal Budget */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">
              Goal Budget
            </h3>

            <div className="space-y-3 flex-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border rounded-lg p-3 hover:shadow-md transition hover:scale-102"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone size={20} className="text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-800">iPhone 19</p>
                      <p className="text-xs text-gray-400">12 Dec 2025</p>
                    </div>
                  </div>
                  <p className="text-red-500 font-semibold">-$1000</p>
                </div>
              ))}
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white py-2 rounded-lg shadow transition">
              <Plus size={18} /> Add Goal
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetPlan;
