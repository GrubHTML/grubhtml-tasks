import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  Trash2,
  Edit2,
  X,
  Plus,
  Menu,
  List,
  Star,
  Calendar,
} from "lucide-react";
import GrubTasksLogo from "../components/GrubTasksLogo";
import {
  useTasks,
  useCreateTask,
  useDeleteTask,
  useUpdateTask,
  useTrashTasks,
  useRestoreTask,
  usePermanentDeleteTask,
} from "../hooks/useTasks";

export default function TodoApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("My Tasks");
  //Task fetching
  const { data, isLoading, isError } = useTasks();
  const tasks = data?.tasks || [];
  // Trash task fetching
  const { data: trashData } = useTrashTasks();
  const trashTasks = trashData?.tasks || [];

  // create task start
  // Create task hook
  const { mutate: createTask, isPending: isCreating } = useCreateTask();

  // Local state for new task input
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Handle form submit
  const handleCreateTask = () => {
    if (!newTask.trim()) return;

    createTask(
      { title: newTask, description: newDescription },
      {
        onSuccess: () => {
          setNewTask("");
          setNewDescription(""); // Clear input after successful creation
        },
      }
    );
  };
  // create task end
  // update task start
  const { mutate: updateTaskMutation, isPending: isUpdating } = useUpdateTask();

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // update task end
  // delete task start
  const { mutate: deleteTaskMutation } = useDeleteTask();
  const handleDelete = (id) => {
    deleteTaskMutation(id);
  };
  const { mutate: permanentDelete } = usePermanentDeleteTask();

  // delete task end
  // restore trash task
  const { mutate: restoreTaskMutation } = useRestoreTask();
  const handleRestore = (id) => {
    restoreTaskMutation(id);
  };
  // dynamic rash count
  const trashCount = trashTasks.length;

  if (isLoading)
    return <p className="text-center text-gray-400 mt-8">Loading tasks...</p>;
  if (isError)
    return (
      <p className="text-center text-red-400 mt-8">Failed to load tasks.</p>
    );

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-black/20 backdrop-blur-sm border-r border-white/10 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6">
          <div className="mb-8">
            <GrubTasksLogo />
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setCurrentView("My Tasks")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === "My Tasks"
                  ? "bg-purple-500/20 text-white border border-purple-500/50"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <List className="w-5 h-5" />
              <span>My Tasks</span>
            </button>

            <button
              onClick={() => setCurrentView("Important")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === "Important"
                  ? "bg-purple-500/20 text-white border border-purple-500/50"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <Star className="w-5 h-5" />
              <span>Important</span>
            </button>

            <button
              onClick={() => setCurrentView("Today")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                currentView === "Today"
                  ? "bg-purple-500/20 text-white border border-purple-500/50"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Today</span>
            </button>

            <div className="border-t border-white/10 my-4"></div>

            <button
              onClick={() => setCurrentView("Trash")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-white">{currentView}</h1>
            </div>
            {currentView !== "Trash" && (
              <div className="text-sm text-gray-400">1 of 3 completed</div>
            )}
          </div>
        </div>

        {/* Task List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Add New Task Input */}
            {currentView !== "Trash" && (
              <div className="mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 focus-within:border-purple-500 transition-colors">
                  {/* Task Title Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <Plus className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Add a task"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCreateTask();
                      }}
                      className="flex-1 bg-transparent text-white placeholder:text-gray-400 outline-none text-lg"
                    />
                  </div>

                  {/* Description Row - Only shows when typing task */}
                  {newTask && (
                    <div className="flex items-start gap-3 mb-3 pl-8">
                      <input
                        type="text"
                        placeholder="Add description (optional)"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleCreateTask();
                        }}
                        className="flex-1 bg-transparent text-white placeholder:text-gray-400 outline-none text-sm"
                      />
                    </div>
                  )}

                  {/* Action Button - Only shows when task has content */}
                  {newTask && (
                    <div className="flex justify-end pl-8">
                      <button
                        onClick={handleCreateTask}
                        disabled={isCreating}
                        className="px-6 py-2 bg-linear-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 rounded-full text-white font-medium transition-all hover:scale-105"
                      >
                        {isCreating ? "Adding..." : "Add Task"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Task List */}
            {currentView === "Trash" ? (
              // Trash View
              <div className="space-y-2">
                {trashTasks.length === 0 ? (
                  <p className="text-center text-gray-400 mt-6">
                    Trash is empty 🗑️
                  </p>
                ) : (
                  trashTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group hover:bg-white/10 transition-all"
                    >
                      <span className="flex-1 text-gray-400 line-through font-semibol text-md">
                        {task.title}
                      </span>
                      {/* Restore Handler */}
                      <button
                        className="opacity-0 group-hover:opacity-100 text-purple-400 hover:text-purple-300 transition-all text-sm font-medium"
                        onClick={() => handleRestore(task.id)}
                      >
                        Restore
                      </button>
                      <button
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all"
                        onClick={() => permanentDelete(task.id)}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              // Regular Tasks View
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group hover:bg-white/10 transition-all"
                  >
                    <button
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      // Add your toggle complete handler here
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </button>

                    <span
                      className={`flex-1 ${
                        task.completed
                          ? "text-gray-500 line-through"
                          : "text-white"
                      }`}
                    >
                      <p className="font-semibold text-lg">{task.title}</p>
                      <p>{task.description}</p>
                    </span>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        onClick={() => {
                          setEditingTask(task);
                          setEditTitle(task.title);
                          setEditDescription(task.description || "");
                          setShowEditModal(true);
                        }}
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        onClick={() => handleDelete(task.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-linear-to-br from-purple-900/40 via-slate-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-8 w-full max-w-lg border border-purple-500/30 shadow-2xl shadow-purple-500/30">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Edit Task
              </h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-purple-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Task Title Input */}
            <div className="mb-4">
              <label className="text-purple-200 text-sm font-medium mb-2 block">
                Task Title
              </label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-400"
                placeholder="Enter task title"
              />
            </div>

            {/* Description Textarea */}
            <div className="mb-6">
              <label className="text-purple-200 text-sm font-medium mb-2 block">
                Description
              </label>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-purple-500/30 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-400 resize-none h-32"
                placeholder="Add description (optional)"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full border border-purple-500/30 hover:bg-white/20 hover:border-purple-500/50 transition-all font-medium"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  updateTaskMutation(
                    {
                      id: editingTask.id,
                      data: {
                        title: editTitle,
                        description: editDescription,
                      },
                    },
                    {
                      onSuccess: () => setShowEditModal(false),
                    }
                  );
                }}
                disabled={isUpdating}
                className="px-6 py-2.5 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
