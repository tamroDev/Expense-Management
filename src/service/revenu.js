import Http from "../helpers/Http";
import { toast } from "react-toastify";
const http = new Http();

export const createRevenu = async (revenu) => {
  try {
    const data = await http.post("revenu/create", revenu);

    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error(
        `Error: ${error.response.data.message || "An error occurred!"}`
      );
    } else {
      toast.error("An unexpected error occurred!");
    }
    throw error;
  }
};

export const getRevenuById = async (id) => {
  try {
    const data = await http.get(`revenu/getRevenu?idUser=${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRevenuById = async (id) => {
  try {
    const data = await http.delete(`revenu/deleteRevenu?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateRevenuById = async (id, newRevenu) => {
  try {
    const data = await http.put(`/revenu/updateRevenu/${id}`, newRevenu);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
