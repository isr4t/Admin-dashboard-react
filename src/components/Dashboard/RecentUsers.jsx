import React from 'react';

const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
  { name: 'Bob Brown', email: 'bob@example.com', role: 'Moderator' },
];

const RecentUsers = () => {
  return (
    <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 mt-6 overflow-x-auto">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Recent Users</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-600 dark:text-slate-400">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i} className="border-b border-slate-200 dark:border-slate-700">
              <td className="py-2 px-4 text-slate-800 dark:text-white">{user.name}</td>
              <td className="py-2 px-4 text-slate-800 dark:text-white">{user.email}</td>
              <td className="py-2 px-4 text-slate-800 dark:text-white">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentUsers;
