import Http from "../helpers/Http";
import { toast } from "react-toastify";
const http = new Http();

export const createExpense = async (expense) => {
  try {
    const data = await http.post("expense/create", expense);

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
    throw error;
  }
};

export const getExpenseById = async (id) => {
  try {
    const data = await http.get(`expense/getExpense?idUser=${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpenseById = async (id) => {
  try {
    const data = await http.delete(`expense/deleteExpense?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateExpenseById = async (id, newExpense) => {
  try {
    const data = await http.put(`/expense/updateExpense/${id}`, newExpense);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
