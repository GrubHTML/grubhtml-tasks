import axiosInstance from "./axiosInstance";

export const fetchTasks = async () => {
  const res = await axiosInstance.get("/getalltasks");
  return res.data; // ✅ only return the useful part
};

export const createTask = async (data) => {
  const res = await axiosInstance.post("/addtask", data);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await axiosInstance.put(`/updatetask/${id}`, data);
  return res.data;
};

//soft delete
export const deleteTask = (id) => axiosInstance.put(`/softdelete/${id}`);

// trash list
export const getTrashedTasks = async () => {
  const res = await axiosInstance.get("/gettrashedtasks");
  return res.data;
};

//restore task
export const restoreTask = (id) => axiosInstance.put(`/restore/${id}`);

// parmanent delete
export const permanentDeleteTask = (id) =>
  axiosInstance.delete(`/deletetask/${id}`);

// important task
export const getImportantTasks = async () => {
  const res = await axiosInstance.get("/importanttask");
  return res.data.tasks; // return ONLY the list
};

// mark task as important
export const importantTask = (id) => axiosInstance.put(`/importanttask/${id}`);

// restore important task
export const restoreImportantTask = (id) =>
  axiosInstance.put(`/restoreimportanttask/${id}`);

export const getTaskById = (id) => axiosInstance.get(`/getonetask/${id}`);
