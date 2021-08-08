import React, { useState, useEffect } from "react";
import typeProductApi from "../../../api/typeProductApi";

function TypeProductFilter(props) {
  const [typeProducts, setTypeProducts] = useState({});
  const [active, setActive] = useState(0);

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      const res = await typeProductApi.getListTypeProduct();
      setTypeProducts(res.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  function handleChangeType(index, id) {
    setActive(index);
    // Callback to Parent Component
    props.changeType(id);
  }

  const eTypePr = typeProducts.length ? typeProducts.map((item, index) => {
    return (
      <li className="nav-item" key = {index} value={item._id} onClick={() => handleChangeType(index, item._id)}>
        <a className={active === index ? "nav-link active" : "nav-link"} id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">
          {item.name}
        </a>
      </li>
    );
  }) : null;

  return (
    <ul className="nav nav-tabs" role="tablist">
      {eTypePr}
    </ul>
  );
}

export default TypeProductFilter;