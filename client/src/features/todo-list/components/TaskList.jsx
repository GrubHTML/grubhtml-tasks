import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onImportant }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onImportant={onImportant}
        />
      ))}
    </div>
  );
};

export default TaskList;
// import { Star, StarOff, Check, Undo2 } from "lucide-react";

// export default function TaskList({
//   tasks,
//   onEdit,
//   onDelete,
//   onImportant,
//   onCompleted,
// }) {
//   return (
//     <div className="space-y-3">
//       {tasks.map((task) => (
//         <div
//           key={task.id}
//           className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl"
//         >
//           <div
//             className={`flex-1 ${
//               task.completed ? "line-through text-gray-400" : "text-white"
//             }`}
//           >
//             {task.title}

//             {task.isImportant && (
//               <span className="ml-2 text-yellow-400 text-sm">(Important)</span>
//             )}
//           </div>

//           <div className="flex items-center gap-3">
//             {/* MARK IMPORTANT */}
//             <button
//               onClick={() => onImportant(task.id, task.isImportant)}
//               className="text-yellow-400 hover:text-yellow-300"
//             >
//               {task.isImportant ? <StarOff size={20} /> : <Star size={20} />}
//             </button>

//             {/* MARK COMPLETED */}
//             <button
//               onClick={() => onCompleted(task.id, task.completed)}
//               className="text-green-400 hover:text-green-300"
//             >
//               {task.completed ? <Undo2 size={20} /> : <Check size={20} />}
//             </button>

//             {/* EDIT */}
//             <button
//               onClick={() => onEdit(task)}
//               className="text-purple-400 hover:text-purple-300"
//             >
//               Edit
//             </button>

//             {/* DELETE */}
//             <button
//               onClick={() => onDelete(task.id)}
//               className="text-red-400 hover:text-red-300"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
