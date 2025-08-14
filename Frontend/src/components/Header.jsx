import { Menu } from "lucide-react";

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header
      className={`bg-white shadow p-4 flex items-center fixed top-0 left-0 right-0`}
    >
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 rounded hover:bg-gray-200"
      >
        <Menu />
      </button>

      {/* Title */}
      <h1 className="ml-4 text-xl font-bold">Dashboard</h1>
    </header>
  );
}
