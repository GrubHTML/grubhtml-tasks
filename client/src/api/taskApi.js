import axiosInstance from "./axiosInstance";

export const fetchTasks = async () => {
  const res = await axiosInstance.get("/tasks/getalltasks");
  return res.data; // ✅ only return the useful part
};

export const createTask = async (data) => {
  const res = await axiosInstance.post("/tasks/addtask", data);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await axiosInstance.put(`/tasks/updatetask/${id}`, data);
  return res.data;
};

//soft delete
export const deleteTask = (id) => axiosInstance.put(`/tasks/softdelete/${id}`);

// trash list
export const getTrashedTasks = async () => {
  const res = await axiosInstance.get("/tasks/gettrashedtasks");
  return res.data;
};

//restore task
export const restoreTask = (id) => axiosInstance.put(`/tasks/restore/${id}`);

// parmanent delete
export const permanentDeleteTask = (id) =>
  axiosInstance.delete(`/tasks/deletetask/${id}`);

// important task
export const getImportantTasks = async () => {
  const res = await axiosInstance.get("/tasks/importanttask");
  return res.data.tasks; // return ONLY the list
};

// mark task as important
export const importantTask = (id) =>
  axiosInstance.put(`/tasks/importanttask/${id}`);

// restore important task
export const restoreImportantTask = (id) =>
  axiosInstance.put(`/tasks/restoreimportanttask/${id}`);

export const getTaskById = (id) => axiosInstance.get(`/tasks/getonetask/${id}`);
