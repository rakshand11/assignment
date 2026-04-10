import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const createTask = async (title) => {
  const response = await API.post("/tasks", { title });
  return response.data;
};

export const getTask = async () => {
  const response = await API.get("/tasks");
  return response.data;
};

export const updateTask = async (id) => {
  const response = await API.patch(`tasks/${id}`);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await API.delete(`tasks/${id}`);
  return response.data;
};
