import React from 'react';
import Header from "./Header";
import Card from './Card';
import Qualities from './Qualities';
import Work from './Work';
import Video from './Video';
import News from './News';
import Footer from './Footer';
import service from '../services';
function App() {
  return (
    <>
      <Header />
      <div className="row-title row">
        <div className="special col-lg-3">
          <Card services={service[0].services}
            imgUrl={service[0].imgUrl}
          />
        </div>
        <div className="special col-lg-3">
          <Card services={service[1].services}
            imgUrl={service[1].imgUrl}
          />
        </div>
        <div className="special col-lg-3">
          <Card services={service[2].services}
            imgUrl={service[2].imgUrl}
          />
        </div>
        <div className="special col-lg-3">
          <Card services={service[3].services}
            imgUrl={service[3].imgUrl}
          />
        </div>
      </div>
      <Qualities />
      <Work />
      <Video />
      <News />
      <Footer />
    </>
  );
}

export default App;
