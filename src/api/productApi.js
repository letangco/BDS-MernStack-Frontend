import axiosClient from "./axiosClient";


const productApi = {
  getListProduct: (query) => {
    const {
      type = '',
      category = '',
      ward = '',
      price = '',
      square = '',
      page = '',
      limit = ''
    } = query;
    const categoryQuery = category === '' ? '' : `category=${category}&`;
    const typeQuery = type === '' ? '' : `type=${type}&`;
    const wardQuery = ward === '' ? '' : `ward=${ward}&`;
    const priceQuery = price === '' ? '' : `price=${price}&`;
    const squareQuery = square === '' ? '' : `square=${square}&`;
    const pageQuery = page === '' ? '' : `page=${page}&`;
    const limitQuery = limit === '' ? '' : `limit=${limit}&`;
    const urlQuery = typeQuery + categoryQuery + wardQuery + priceQuery + squareQuery + pageQuery + limitQuery;

    const url = `/product?${urlQuery.slice(0, -1)}`;
    return axiosClient.get(url);
  },
  getTop4CountProductByCity: () => {
    const url = `/product/get-top-4-count-product-by-city`;
    return axiosClient.get(url);
  }
};


export default productApi;
