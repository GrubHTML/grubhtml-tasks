import { Menu } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen, currentView }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-6 py-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-300 hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white">{currentView}</h1>
      </div>
    </div>
  );
};

export default Header;
