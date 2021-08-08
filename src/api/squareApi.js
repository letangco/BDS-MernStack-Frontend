import axiosClient from "./axiosClient";


const squareApi = {
  getListSquare: () => {
    const url = `/square`;
    return axiosClient.get(url);
  }
};

export default squareApi;