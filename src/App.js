import React, { useState } from 'react';
import './index.css';
import TopNavbar from './components/layout/topnavbar';
import NavbarMenu from './components/layout/navbarmenu';
import MainSlider from './components/layout/mainslider';
import ListProperties from './components/layout/listproperties';
import PropertiesByCity from './components/layout/propertiesbycity';
import TrustAgents from './components/layout/trustagent';
import Blog from './components/layout/blog';
import JoinTeam from './components/layout/jointeam';
import Footer from './components/layout/footer';
import CopyRight from './components/layout/copyright';

function App() {

  const [filterData, setFilterData] = useState({  });
  const [dataSearch, setDataSearch] = useState(false);

  const handleChangeFilter = (filter) => {
    const temp = {};
    for (const [key, value] of Object.entries(filter)) {
      if (value.toString() !== 'all') {
        temp[key] = value;
      }
    }
    setFilterData(temp);
  };

  const handleOnSearch = () => {
    setDataSearch(!dataSearch);
  };

  return (
    <div className="App">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Askbootstrap" />
      <meta name="author" content="Askbootstrap" />
      <title>Osahan Property - Bootstrap 4 Light Real Estate Theme</title>
      {/* Bootstrap core CSS */}
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      {/* Material Design Icons */}
      <link href="vendor/icons/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      {/* Select2 CSS */}
      <link href="vendor/select2/css/select2-bootstrap.css" />
      <link href="vendor/select2/css/select2.min.css" rel="stylesheet" />
      {/* Custom styles for this template */}
      <link href="css/osahan.css" rel="stylesheet" />

      {/* Component */}
      <TopNavbar />
      <NavbarMenu />
      <MainSlider changeFilter = { handleChangeFilter } onSearch = {handleOnSearch}/>
      <ListProperties dataFilter = {filterData} dataSearch={dataSearch}/>
      <PropertiesByCity />
      <TrustAgents />
      <Blog />
      <JoinTeam />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
