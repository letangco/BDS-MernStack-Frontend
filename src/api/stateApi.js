import axiosClient from "./axiosClient";


const stateApi = {
  getWardById: (stateId) => {
    const url = `/state/getWards/${stateId}`;
    return axiosClient.get(url);
  }
};

export default stateApi;