import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  getTrashedTasks,
  restoreTask,
  permanentDeleteTask,
  importantTask,
  getImportantTasks,
  restoreImportantTask,
} from "../api/taskApi";
import toast from "react-hot-toast";
export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}
export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Task created successfully!");
      // Refetch todos after successful creation
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateTask(id, data),
    onSuccess: () => {
      toast.success("Task updated successfully!");
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
export function useTrashTasks() {
  return useQuery({
    queryKey: ["trashTasks"],
    queryFn: getTrashedTasks,
  });
}
export function useRestoreTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreTask,
    onSuccess: () => {
      toast.success("Task restored successfully!");
      queryClient.invalidateQueries(["tasks"]); // refresh main list
      queryClient.invalidateQueries(["trashTasks"]); // refresh trash list
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      toast.success("Task moved to trash");
      queryClient.invalidateQueries(["tasks"]);
      queryClient.invalidateQueries(["trashTasks"]);
    },
  });
}
export function useImportantTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: importantTask,
    onSuccess: () => {
      toast.success("Task marked as important");
      queryClient.invalidateQueries(["tasks"]);
      queryClient.invalidateQueries(["importantTasks"]);
    },
  });
}
export function useGetImportantTasks() {
  return useQuery({
    queryKey: ["importantTasks"],
    queryFn: getImportantTasks,
  });
}

export function useImportantRestoreTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restoreImportantTask,
    onSuccess: () => {
      toast.success("Task unmarked as important");
      queryClient.invalidateQueries(["tasks"]); // refresh main list
      queryClient.invalidateQueries(["importantTasks"]); // refresh trash list
    },
  });
}

export function usePermanentDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: permanentDeleteTask,
    onSuccess: () => {
      toast.success("Task permanently deleted");
      queryClient.invalidateQueries(["trashTasks"]);
    },
  });
}
