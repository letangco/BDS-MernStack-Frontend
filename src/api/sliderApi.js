import axiosClient from "./axiosClient";


const sliderApi = {
  getSliders: () => {
    const url = `/slide`;
    return axiosClient.get(url);
  }
};

export default sliderApi;