import { X } from "lucide-react";

const EditTaskModal = ({
  show,
  onClose,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  onSave,
  isUpdating,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-linear-to-br from-purple-900/40 via-slate-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-8 w-full max-w-lg border border-purple-500/30 shadow-2xl shadow-purple-500/30">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Edit Task</h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-purple-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <input
          type="text"
          className="w-full p-3 bg-white/10 text-white rounded-xl mb-4"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />

        <textarea
          className="w-full p-3 bg-white/10 text-white rounded-xl h-32"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        ></textarea>

        <div className="flex justify-end mt-4">
          <button
            onClick={onSave}
            className="px-6 py-2.5 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
          >
            {isUpdating ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
