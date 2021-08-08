import axiosClient from "./axiosClient";


const priceApi = {
  getListPrice: () => {
    const url = `/price`;
    return axiosClient.get(url);
  }
};

export default priceApi;