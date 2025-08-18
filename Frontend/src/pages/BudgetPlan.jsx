import React from "react";
import Layout from "../components/Layout";
import '../index.css'

const BudgetPlan = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 w-full h-auto bg-amber-400">
        <div className="flex flex-row justify-between p-8 h-[300px] bg-lime-500">
          <div className="w-[32%] bg-amber-300">col1</div>
          <div className="w-[32%] bg-amber-300">col2</div>
          <div className="w-[32%] bg-amber-300">col3</div>
        </div>
        <div className="flex flex-row gap-4 p-8 h-[550px] bg-indigo-500">
          <div className="w-[70%] bg-lime-400">Col1</div>
          <div className="w-[30%] bg-amber-500">col2</div>
        </div>
      </div>
    </Layout>
  );
};

export default BudgetPlan;
