import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import profile from "../assets/logo.png";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  // theme color
  const theme = {
    primary: "text-blue-600",
    primaryBg: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    accent: "bg-red-500",
  };
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Overview", path: "/overview" },
    { name: "Expense", path: "/expense" },
    { name: "Analystic", path: "/analyst" },
    { name: "Budget Planner", path: "/budgetPlan" },
    { name: "Report", path: "/report"},
    { name: "Account", path: "/account" },
    { name: "Settings", path: "/setting" },
  ];

  const currentPage = menuItems.find(item => item.path === location.pathname);
  const pageTitle = currentPage ? currentPage.name : "";

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10 border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-2">
        
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-auto h-10" />

          {/* Menu Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
            title="Toggle Sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Title */}
          <h1 className={`text-lg font-semibold hidden sm:block ${theme.primary}`}>
            {pageTitle}
          </h1>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition" title="Notifications">
            <Bell className="w-6 h-6 text-gray-600" />
            <span
              className={`absolute top-1.5 right-1.5 h-2.5 w-2.5 ${theme.accent} rounded-full ring-2 ring-white`}
            ></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition">
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <span className="hidden sm:block font-medium text-gray-700">
              Kja Kach
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
