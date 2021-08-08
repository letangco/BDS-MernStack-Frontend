import React, { useState, useEffect } from "react";
import categoryApi from "../../../api/categoryApi";

function Category(props) {
  const [categories, setCategories] = useState({});

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      const res = await categoryApi.getListCategory();
      setCategories(res.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  function changeCategory(event) {
    props.changeCategory(event.target.value);
  }

  const eCategory = categories.length ? categories.map((item, index) => {
    return (
      <option value={item._id} key={index}>{item.name}</option>
    );
  }) : null;
  return (
    <div className="input-group">
      <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
      <select className="form-control select2 no-radius" onChange={changeCategory}>
        <option value='all'>Danh mục</option>
        {eCategory}
      </select>
    </div>
  );
}

export default Category;