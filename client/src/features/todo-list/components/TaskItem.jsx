import { useState } from "react";
import {
  Edit2,
  Trash2,
  CheckCircle2,
  Circle,
  Star,
  StarOff,
} from "lucide-react";

const TaskItem = ({ task, onEdit, onDelete, onImportant }) => {
  const [isMarking, setIsMarking] = useState(false);
  const handleImportantClick = async () => {
    if (isMarking) return; // prevent double click
    setIsMarking(true);
    onImportant(task.id, {
      onSettled: () => setIsMarking(false), // enable again after API
    });
  };
  return (
    <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl group">
      {task.completed ? (
        <CheckCircle2 className="text-purple-400" />
      ) : (
        <Circle className="text-purple-400" />
      )}

      <div
        className={`flex-1 ${
          task.completed ? "line-through text-gray-500" : "text-white"
        }`}
      >
        <p className="font-semibold text-lg">{task.title}</p>
        <p>{task.description}</p>
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100">
        <button
          onClick={handleImportantClick}
          disabled={isMarking}
          className={`${
            isMarking
              ? "text-yellow-500 cursor-not-allowed"
              : "text-gray-400 hover:text-yellow-400"
          }`}
        >
          {isMarking ? (
            <StarOff className="w-4 h-4" />
          ) : (
            <Star className="w-4 h-4" />
          )}
        </button>
        <button
          onClick={() => onEdit(task)}
          className="text-gray-400 hover:text-purple-400"
        >
          <Edit2 className="w-4 h-4" />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-red-400"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
