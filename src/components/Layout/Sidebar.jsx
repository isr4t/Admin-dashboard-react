import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

import React, { useState } from "react";
import User from "../../assets/user.png";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Message",
    badge: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = ({collapsed,onToggle, currentPage,onPageChange}) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div
      className= {`${collapsed ? "w-20 " : "72"} transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col
   relative z-10 `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600
        rounded-xl flex items-center justify-center shadow-lg"
          >
            <Zap className="w-6 h-6 text-white" />
          </div>

            {/* Conditional Rendering  */}

          {(!collapsed && (
            <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Nexus
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
          ))}
        </div>
      </div>

      {/* Navigation for dynamic menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <div key={item.id}>
              <div
                onClick={() => hasSubmenu && toggleSubmenu(item.id)}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
                hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.label}
                  </span>
                </div>

                {/* Badges / Count */}
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span className="text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  {item.count && (
                    <span className="text-xs font-medium text-slate-400">
                      {item.count}
                    </span>
                  )}
                  {hasSubmenu && (
                    <span className="text-slate-400 text-xs">
                      {openMenu === item.id ? "▲" : "▼"}
                    </span>
                  )}
                </div>
              </div>

              {/* Submenu */}
              {hasSubmenu && openMenu === item.id && (
                <div className="ml-10 mt-1 space-y-1">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub.id}
                      className="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
                    >
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src={User}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Alex Jhonson
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Administration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
