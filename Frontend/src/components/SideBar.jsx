const Sidebar = ({ isOpen }) => {
    return (
        <div className={`bg-white shadow fixed transition-all z-10 duration-300 ${isOpen ? "w-64" : "w-0"} overflow-hidden absolute h-full`}>
            <div className="p-4">
                Sidebar Content
            </div>
        </div>
    );
};

export default Sidebar
  