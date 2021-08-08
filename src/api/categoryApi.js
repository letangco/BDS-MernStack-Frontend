import axiosClient from "./axiosClient";


const categoryApi = {
  getListCategory: () => {
    const url = `/category`;
    return axiosClient.get(url);
  }
};

export default categoryApi;