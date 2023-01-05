import axios from "axios";
import { User } from "../../components/types/User";
const API_URL = "http://localhost:3002/users/";

// Register user
const register = async (userData: User) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: User) => {
  const response = await axios.post(API_URL + "login", userData);
  window.localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const getMe = async (userData: User) => {
  const config = {
    headers: {
      authorization: `Bearer ${userData.token}`,
    },
  };
  const response = await axios.get(API_URL + "me", config);

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  getMe,
  login,
};

export default authService;
