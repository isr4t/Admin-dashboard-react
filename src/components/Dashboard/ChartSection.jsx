import React from 'react';
import RevenueChart from './RevenueChart';

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <RevenueChart />
      </div>

      <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-md">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">Other Stats</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Placeholder content</p>
      </div>
    </div>
  );
};

export default ChartSection;
