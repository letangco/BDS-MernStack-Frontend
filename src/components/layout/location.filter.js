import React, { useState, useEffect } from "react";
import stateApi from "../../api/stateApi";

function FilterLocation() {
  const [locations, setLocation] = useState({});

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      // HCM
      const res = await stateApi.getWardById('60f9ce5e1b2b8f6fa6d650a3');
      setLocation(res.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  const eLocation = locations.length ? locations.map((item, index) => {
    return (
      <option value={item._id} key={index}>{item.name_with_type}</option>
    );
  }) : null;

  return (
    <div className="input-group">
      <div className="input-group-addon"><i className="mdi mdi-google-maps" /></div>
      <select className="form-control select2 no-radius">
        <option value>Locations</option>
        {eLocation}
      </select>
    </div>
  );
}

export default FilterLocation;