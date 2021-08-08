import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import Pagination from "react-js-pagination";
function ListProperties(props) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [dataFilter, setDataFilter] = useState({});

  const fetchApiFunc = async (params = {}) => {
    try {
      const res = await productApi.getListProduct(params);
      setProducts(res);
      setCurrentPage(res.page);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setDataFilter(props.dataFilter);
    fetchApiFunc(props.dataFilter);
    // console.log(props.dataFilter);
    // console.log(props.dataSearch)
  }, [props.dataSearch]);

  if (dataFilter) {
    let qr = '';
    for (const [key, value] of Object.entries(dataFilter)) {
      qr += `&${key}=${value}`;
    }
    qr = qr.substring(1);
    window.history.pushState({}, '', `?${qr}`);
  }

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      fetchApiFunc({ ...dataFilter, page: pageNumber });
      setCurrentPage(pageNumber);
    }
  }

  const eProduct = products.payload ? products.payload.map((item, index) => {
    return (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="card card-list">
          <a href="/">
            <div className="card-img">
              <div className="love-badge text-danger">
                {item.special ? <i className="mdi mdi-heart" /> : <i className="mdi mdi-heart-outline" />}
              </div>
              {/* <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 12</div> */}
              <span className="badge badge-primary">{item.typeId.name}</span>
              <img className="card-img-top" src={item.avatar} alt="image_da" />
            </div>
            <div className="card-body">
              <h2 className="text-primary mb-2 mt-0">
                {item.price.price + ' ' + item.price.unit}
                {/* <small>/Per Month</small> */}
              </h2>
              <h5 className="card-title mb-2">
                {item.title}
              </h5>
              <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" />
                {`${item.address} ${item.wardId.name_with_type} ${item.stateId.name}`}
              </h6>
            </div>
            <div className="card-footer">
              <span><i className="mdi mdi-sofa" /> Beds : <strong>{item.bedroom}</strong></span>
              <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>{item.bath}</strong></span>
              <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>{`${item.area.area} ${item.area.unit}`}</strong></span>
            </div>
          </a>
        </div>
      </div>
    );
  }) : null;

  return (
    <section className="section-padding">
      <div className="section-title text-center mb-5">
        <h2>Các sản phẩm mới nhất</h2>
        <p>LH Chuyên viên tư vấn BĐS: LÊ THÀNH (0355.085.340)</p>
      </div>
      <div className="container">
        <div className="row">
          {eProduct}
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center product-pagination">
            {/* <button className="btn btn-secondary font-weight-bold btn-lg" type="submit">VIEW ALL</button> */}
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={10}
              totalItemsCount={products.total_item || 0}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-row py-4 align-items-center">
        
      </div> */}
    </section>
  );
}

export default ListProperties;