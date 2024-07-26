import Http from "../helpers/Http";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const http = new Http();

export const createAccount = async (newAccount) => {
  try {
    const data = await http.post("/Acount.json", newAccount);
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
