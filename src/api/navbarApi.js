import axiosClient from "./axiosClient";


const navbarApi = {
  getListNavbar: () => {
    const url = `/navbar`;
    return axiosClient.get(url);
  }
};

export default navbarApi;