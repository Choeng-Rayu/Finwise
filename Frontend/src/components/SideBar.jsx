import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
  LayoutDashboard,
  HandCoins,
  CircleDollarSign,
  ChartNoAxesCombined,
  BarChart2,
  Settings,
  Users,
  ArrowLeft,
  Newspaper,
} from "lucide-react";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  // Theme colors
  const theme = {
    primary: "bg-blue-500",
    primaryHover: "hover:bg-blue-600",
    textPrimary: "text-blue-600",
    activeBg: "bg-gradient-to-r from-blue-500 to-indigo-500",
  };

  // Close sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsSidebarOpen]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Overview", path: "/overview", icon: <BarChart2 size={20} /> },
    { name: "Expense", path: "/expense", icon: <HandCoins size={20} /> },
    { name: "Analystic", path: "/analyst", icon: <ChartNoAxesCombined size={20} /> },
    { name: "Budget Planner", path: "/budgetPlan", icon: <CircleDollarSign size={20} /> },
    { name: "Report", path: "/report", icon: <Newspaper size={20} /> },
    { name: "Account", path: "/account", icon: <Users size={20} /> },
    { name: "Settings", path: "/setting", icon: <Settings size={20} /> },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`bg-white shadow-lg fixed transition-all z-30 duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden h-full border-r border-gray-100`}
    >
      {/* Logo & Close Button */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex flex-col gap-2 px-3">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? `${theme.activeBg} text-white shadow-md`
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
