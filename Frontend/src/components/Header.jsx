import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import profile from "../assets/logo.png";
import logo from "../assets/logo.png"

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-auto h-10" />
          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded hover:bg-gray-100">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-100">
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:block font-medium">John Doe</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}
