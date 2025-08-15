import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Page Content */}
        <main
          className={`pt-16 p-4 `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
