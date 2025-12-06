import TrashItem from "./TrashItem";

const TrashList = ({ trashTasks, onRestore, onPermanentDelete }) => {
  if (trashTasks.length === 0)
    return <p className="text-center text-gray-400 mt-6">Trash is empty 🗑️</p>;

  return (
    <div className="space-y-2">
      {trashTasks.map((task) => (
        <TrashItem
          key={task.id}
          task={task}
          onRestore={onRestore}
          onPermanentDelete={onPermanentDelete}
        />
      ))}
    </div>
  );
};

export default TrashList;
