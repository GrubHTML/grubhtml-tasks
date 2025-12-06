import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TrashList from "./components/TrashList";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import {
  useTasks,
  useCreateTask,
  useDeleteTask,
  useUpdateTask,
  useTrashTasks,
  useRestoreTask,
  usePermanentDeleteTask,
  useImportantTask,
  useGetImportantTasks,
  useImportantRestoreTask,
} from "../../hooks/useTasks";
import ImportantList from "./components/ImportantList";

export default function TodoApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("My Tasks");

  // Local state for new task input
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // ---- Queries & Mutations ----
  //Task fetching
  const { data, isLoading, isError } = useTasks();
  const tasks = data?.tasks || [];

  // Trash task fetching
  const { data: trashData } = useTrashTasks();
  const trashTasks = trashData?.tasks || [];

  // Important task fetching
  const { data: importantData } = useGetImportantTasks();
  const importantTasks = importantData || [];

  const { mutate: createTask, isPending: isCreating } = useCreateTask();
  const { mutate: updateTaskMutation, isPending: isUpdating } = useUpdateTask();
  const { mutate: deleteTaskMutation } = useDeleteTask();
  const { mutate: restoreTaskMutation } = useRestoreTask();
  const { mutate: permanentDelete } = usePermanentDeleteTask();
  const { mutate: importantTaskMutation } = useImportantTask();
  const { mutate: restoreImportantTaskMutation } = useImportantRestoreTask();

  // ---- Handlers ----
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
  const openEditModal = (task) => {
    setEditingTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description || "");
    setShowEditModal(true);
  };
  const handleSaveEdit = () => {
    updateTaskMutation(
      {
        id: editingTask.id,
        data: { title: editTitle, description: editDescription },
      },
      {
        onSuccess: () => setShowEditModal(false),
      }
    );
  };

  if (isLoading)
    return <p className="text-center text-gray-400 mt-8">Loading tasks...</p>;
  if (isError)
    return (
      <p className="text-center text-red-400 mt-8">Failed to load tasks.</p>
    );

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
        trashCount={trashTasks.length}
        importantCount={importantTasks.length}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentView={currentView}
        />

        {/* Task List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Add New Task Input */}
            {currentView !== "Trash" && currentView !== "Important" && (
              <AddTask
                newTask={newTask}
                setNewTask={setNewTask}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
                isCreating={isCreating}
                handleCreateTask={handleCreateTask}
              />
            )}

            {/* Task List Rendering Logic */}
            {currentView === "Trash" ? (
              <TrashList
                trashTasks={trashTasks}
                onRestore={(id) => restoreTaskMutation(id)}
                onPermanentDelete={(id) => permanentDelete(id)}
              />
            ) : currentView === "Important" ? (
              <ImportantList
                importantTasks={importantTasks}
                onUnimportant={(id) => restoreImportantTaskMutation(id)}
              />
            ) : (
              <TaskList
                tasks={tasks}
                onImportant={(id) => importantTaskMutation(id)}
                onEdit={openEditModal}
                onDelete={(id) => deleteTaskMutation(id)}
              />
            )}
          </div>
        </div>
      </div>
      <EditTaskModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        onSave={handleSaveEdit}
        isUpdating={isUpdating}
      />
    </div>
  );
}
