import { List, Star, Calendar, Trash2 } from "lucide-react";
import GrubTasksLogo from "../../../components/GrubTasksLogo";

const Sidebar = ({
  sidebarOpen,
  currentView,
  setCurrentView,
  trashCount,
  importantCount,
}) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-0"
      } bg-black/20 backdrop-blur-sm border-r border-white/10 transition-all overflow-hidden`}
    >
      <div className="p-6">
        <div className="mb-8">
          <GrubTasksLogo />
        </div>

        <div className="space-y-2">
          {[
            { name: "My Tasks", icon: List },
            // { name: "Important", icon: Star },
            { name: "Today", icon: Calendar },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
                currentView === item.name
                  ? "bg-purple-500/20 text-white border border-purple-500/50"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
          {/* Important */}
          <button
            onClick={() => setCurrentView("Important")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
              currentView === "Important"
                ? "bg-purple-500/20 text-white border border-purple-500/50"
                : "text-gray-300 hover:bg-white/5"
            }`}
          >
            <Star className="w-5 h-5" />
            <span>Important</span>

            <span className="ml-auto bg-purple-200/20 text-purple-400 px-2 py-0.5 rounded-full text-xs">
              {importantCount}
            </span>
          </button>

          <div className="border-t border-white/10 my-4"></div>

          {/* Trash */}
          <button
            onClick={() => setCurrentView("Trash")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${
              currentView === "Trash"
                ? "bg-purple-500/20 text-white border border-purple-500/50"
                : "text-gray-300 hover:bg-white/5"
            }`}
          >
            <Trash2 className="w-5 h-5" />
            <span>Trash</span>

            <span className="ml-auto bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full text-xs">
              {trashCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
