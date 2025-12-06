import { X } from "lucide-react";

const TrashItem = ({ task, onRestore, onPermanentDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl group">
      <span className="flex-1 text-gray-400 line-through">{task.title}</span>

      <button
        className="text-purple-400 hover:text-purple-300 opacity-0 group-hover:opacity-100"
        onClick={() => onRestore(task.id)}
      >
        Restore
      </button>

      <button
        className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100"
        onClick={() => onPermanentDelete(task.id)}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TrashItem;
