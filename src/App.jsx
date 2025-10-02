
import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onToggle={() => setSideBarCollapsed(!sideBarCollapsed)} />

          <div className="flex-1 overflow-auto p-6">
            <Dashboard />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
