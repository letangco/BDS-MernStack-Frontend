import axiosClient from "./axiosClient";


const TypeProductApi = {
  getListTypeProduct: () => {
    const url = `/type-product`;
    return axiosClient.get(url);
  }
};

export default TypeProductApi;