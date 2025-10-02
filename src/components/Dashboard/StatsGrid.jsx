// components/Dashboard/StatsGrid.js
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const statsData = [
  { title: 'Revenue', value: '$12,345', change: '+5%', type: 'up' },
  { title: 'Users', value: '1,250', change: '+10%', type: 'up' },
  { title: 'Orders', value: '320', change: '-2%', type: 'down' },
  { title: 'Feedback', value: '85', change: '+12%', type: 'up' },
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {statsData.map((stat, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {stat.value}
              </p>
              <div className="flex items-center space-x-2">
                {stat.type === 'up' ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span>{stat.change}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs Last
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
