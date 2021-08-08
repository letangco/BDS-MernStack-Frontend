import React, { useState, useEffect } from "react";
import squareApi from "../../../api/squareApi";

function SquareFilter(props) {
  const [square, setSquare] = useState({});

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      const res = await squareApi.getListSquare();
      setSquare(res.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  const squares = square.length ? square.map((item, index) => {
    return (
      <option value={item._id} key={index}>{item.title}</option>
    );
  }) : null;
  
  function changeSquare(event) {
    props.changeSquare(event.target.value);
  }

  return (
    <div className="input-group">
      <div className="input-group-addon"><i className="mdi mdi-format-wrap-square" /></div>
      <select className="form-control select2 no-radius" onChange={changeSquare}>
        <option value='all'>Square</option>
        {squares}
      </select>
    </div>
  );
}

export default SquareFilter;
