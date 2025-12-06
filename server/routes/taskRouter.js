const taskRouter = require("express").Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  softDeleteTask,
  getTrashedTasks,
  restoreTask,
  deleteTask,
  getImportantTasks,
  importantTask,
  restoreImportantTask,
} = require("../controllers/taskController");
taskRouter.post("/addtask", createTask);
taskRouter.get("/getalltasks", getAllTasks);
taskRouter.get("/getonetask/:id", getTaskById);
taskRouter.put("/updatetask/:id", updateTask);
taskRouter.put("/softdelete/:id", softDeleteTask);
taskRouter.put("/restore/:id", restoreTask);
taskRouter.get("/gettrashedtasks", getTrashedTasks);
taskRouter.delete("/deletetask/:id", deleteTask);
taskRouter.get("/importanttask", getImportantTasks);
taskRouter.put("/importanttask/:id", importantTask);
taskRouter.put("/restoreimportanttask/:id", restoreImportantTask);

module.exports = { taskRouter };
