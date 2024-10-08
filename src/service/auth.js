import Http from "../helpers/Http";
import { toast } from "react-toastify";

const http = new Http();

export const createAccount = async (newAccount) => {
  try {
    const data = await http.post("/auth/register", newAccount);
    console.log(data);

    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(
        `Error: ${error.response.data.message || "An error occurred!"}`
      );
    } else {
      toast.error("An unexpected error occurred!");
    }
    console.log(error);
    throw error; // Ném lại lỗi nếu cần để xử lý ở nơi gọi hàm
  }
};

export const loginAccount = async (account) => {
  try {
    const data = await http.post("/auth/login", account);
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(
        `Error: ${error.response.data.message || "An error occurred!"}`
      );
    } else {
      toast.error("An unexpected error occurred!");
    }
    throw error; // Ném lại lỗi nếu cần để xử lý ở nơi gọi hàm
  }
};

export const getUserDetails = async () => {
  try {
    const data = await http.get("/auth/me");
    return data;
  } catch (error) {
    console.error("Error fetching user details", error);
    throw error;
  }
};

export const updateLimit = async (id, limit) => {
  try {
    const data = await http.put(`/auth/updateLimit/${id}`, { limit });
    return data;
  } catch (error) {
    console.error("Error updating user limit", error);
    throw error;
  }
};
