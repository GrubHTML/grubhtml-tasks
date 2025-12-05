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
} = require("../controllers/taskController");
taskRouter.post("/addtask", createTask);
taskRouter.get("/getalltasks", getAllTasks);
taskRouter.get("/getonetask/:id", getTaskById);
taskRouter.put("/updatetask/:id", updateTask);
taskRouter.put("/softdelete/:id", softDeleteTask);
taskRouter.put("/restore/:id", restoreTask);
taskRouter.get("/gettrashedtasks", getTrashedTasks);
taskRouter.delete("/deletetask/:id", deleteTask);
module.exports = { taskRouter };
