import { StarOff } from "lucide-react";
import React from "react";

const ImportantItem = ({ task, onUnimportant }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl group">
      <span className="flex-1 text-gray-400 ">{task.title}</span>

      <button
        className="text-gray-400 hover:text-yellow-400"
        onClick={() => onUnimportant(task.id)}
      >
        <StarOff className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ImportantItem;
