const TaskModel = require("../models/taskModel");
const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll({
      where: { isDeleted: false },
    });
    if (!tasks) return res.status(404).json({ error: "No task found" });
    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "task not found" });
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await TaskModel.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    await task.update(req.body);
    return res.status(200).json({ message: "task updated successfuly" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const softDeleteTask = async (req, res) => {
  try {
    const task = await TaskModel.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    await task.update({ isDeleted: true });
    return res.status(200).json({ message: "Task moved to trash" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const getTrashedTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.findAll({
      where: { isDeleted: true },
    });

    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const restoreTask = async (req, res) => {
  try {
    const task = await TaskModel.findByPk(req.params.id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    await task.update({ isDeleted: false });

    return res.status(200).json({ message: "Task restored successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await TaskModel.destroy({ where: { id: req.params.id } });
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  softDeleteTask,
  getTrashedTasks,
  restoreTask,
  deleteTask,
};
