import React from "react";
import Layout from "../components/Layout";
import "../index.css";
import { Plus, Smartphone } from "lucide-react";

const BudgetPlan = () => {
  const total = 1999.73
  const spent = 1000.00
  const remain = total - spent
  const cards = [
    {
      title: "Total Budget",
      amount: `$${total}`,
      change: "+ 6%",
      changeColor: "bg-green-100 text-green-700",
      subtitle: "from last month",
      titleSize: "text-xl",
    },
    {
      title: "Expense",
      amount: `$${spent}`,
      change: "- 3%",
      changeColor: "bg-green-100 text-green-700",
      subtitle: "from last month",
      titleSize: "text-xl",
    },
    {
      title: "Remaining Balance",
      amount: `$${remain}`,
      change: "- 2%",
      changeColor: "bg-green-100 text-green-700",
      subtitle: "from last month",
      titleSize: "text-xl",
    },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center"
          >
            <h2 className={`text-gray-500 ${card.titleSize}`}>{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.amount}</p>
            <div className="text-sm text-gray-400 mt-auto flex items-center justify-between">
              <span>{card.subtitle}</span>
              <span className={`${card.changeColor} px-2 py-0.5 rounded text-xs`}>
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expense Category */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-4">Expense Category</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="border-b text-gray-500">
                  <tr>
                    <th className="pb-2">Category</th>
                    <th>Monthly Limit</th>
                    <th>Spent Today</th>
                    <th>Remaining</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3">Food</td>
                    <td>$150</td>
                    <td>$17.55</td>
                    <td className="font-semibold text-blue-600">$75.78</td>
                    <td className="text-green-600">on track</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Entertainment</td>
                    <td>$75</td>
                    <td>$5.00</td>
                    <td className="font-semibold text-blue-600">$46.50</td>
                    <td className="text-green-600">on track</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Transport</td>
                    <td>$50</td>
                    <td>$3.50</td>
                    <td className="font-semibold text-blue-600">$39.23</td>
                    <td className="text-green-600">on track</td>
                  </tr>
                  <tr>
                    <td className="py-3">Shopping</td>
                    <td>$100</td>
                    <td>$0.00</td>
                    <td className="font-semibold text-blue-600">$86.00</td>
                    <td className="text-green-600">on track</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Goal Budget */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-4">Goal Budget</h3>

            <div className="space-y-3 flex-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border rounded p-3"
                >
                  <div className="flex items-center gap-3">
                    <Smartphone size={20} />
                    <div>
                      <p className="font-medium">iPhone 19</p>
                      <p className="text-xs text-gray-400">12 Dec 2025</p>
                    </div>
                  </div>
                  <p className="text-red-500 font-semibold">-$1000</p>
                </div>
              ))}
            </div>

            <button className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg">
              <Plus size={18} /> Add Goal
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetPlan;
