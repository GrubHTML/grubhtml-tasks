import { Plus } from "lucide-react";

const AddTask = ({
  newTask,
  setNewTask,
  newDescription,
  setNewDescription,
  isCreating,
  handleCreateTask,
}) => {
  return (
    <div className="mb-6">
      <div className="bg-white/5 border border-white/20 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Plus className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreateTask()}
            className="flex-1 bg-transparent text-white outline-none"
          />
        </div>

        {newTask && (
          <>
            <div className="pl-8 mb-3">
              <input
                type="text"
                placeholder="Add description (optional)"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreateTask()}
                className="w-full bg-transparent text-gray-200 outline-none"
              />
            </div>

            <div className="flex justify-end pl-8">
              <button
                onClick={handleCreateTask}
                className="px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 rounded-full text-white font-medium transition-all hover:scale-105"
              >
                {isCreating ? "Adding..." : "Add Task"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddTask;
