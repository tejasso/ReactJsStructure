// api/services/UserService.js
import axiosInstance from "../axios";

const geAlltUser = async (id) => {
  const response = await axiosInstance.get(`/todos`);
  return response.data;
};

const getUser = async (id) => {
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data;
};

const userService = { getUser, geAlltUser };

export default userService;
