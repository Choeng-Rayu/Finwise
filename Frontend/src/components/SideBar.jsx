import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { LayoutDashboard, HandCoins, CircleDollarSign, ChartNoAxesCombined, BarChart2, Settings, Users, ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const location = useLocation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close sidebar
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsSidebarOpen]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Overview", path: "/overview", icon: <BarChart2 size={20} /> },
    { name: "Expense", path: "/expense", icon: <HandCoins size={20}/>},
    { name: "Analystic", path: "/analyst", icon: <ChartNoAxesCombined size={20} />},
    { name: "Budget Planner", path: "/budgetPlan", icon: <CircleDollarSign size={20}/>},
    { name: "Users", path: "/users", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`bg-white shadow-lg fixed transition-all z-20 duration-200 ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden h-full`}
    >
      {/* Logo Menu */}
      <div className="flex flex-row justify-between overflow-hidden">
        <div className="py-3 px-4 ">
          <img src={logo} alt="Logo" className="w-auto h-10" />
        </div>
        <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded hover:bg-gray-100 m-2 hover:cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex flex-col gap-4 p-4 justify-center">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
