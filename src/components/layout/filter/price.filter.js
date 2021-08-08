import React, { useState, useEffect } from "react";
import priceApi from "../../../api/priceApi";

function PriceFilter(props) {
  const [prices, setPrices] = useState({});

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      const res = await priceApi.getListPrice();
      setPrices(res.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  const ePrice = prices.length ? prices.map((item, index) => {
    return (
      <option value={item._id} key={index}>{item.title}</option>
    );
  }) : null;

  function changePrice(event) {
    props.changePrice(event.target.value);
  }

  return (
    <div className="input-group">
      <div className="input-group-addon"><i className="mdi mdi-cash-usd" /></div>
      <select className="form-control select2 no-radius" onChange={changePrice}>
        <option value='all'>Price</option>
        {ePrice}
      </select>
    </div>
  );
}

export default PriceFilter;
