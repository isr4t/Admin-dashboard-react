import React from 'react';
import StatsGrid from './StatsGrid';
import ChartSection from './ChartSection';
import RecentUsers from './RecentUsers';

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <StatsGrid />
      <ChartSection />
      <RecentUsers />
    </div>
  );
};

export default Dashboard;
