import ImportantItem from "./ImportantItem";

const ImportantList = ({ importantTasks, onUnimportant }) => {
  if (importantTasks.length === 0)
    return (
      <p className="text-center text-gray-400 mt-6">
        Important Task is empty 🗑️
      </p>
    );
  return (
    <div className="space-y-2">
      {importantTasks.map((task) => (
        <ImportantItem
          key={task.id}
          task={task}
          onUnimportant={onUnimportant}
        />
      ))}
    </div>
  );
};

export default ImportantList;
