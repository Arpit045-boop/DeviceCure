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
      <div className="cardMain">
      <div className="row">
        <div className="imgset col-lg-3">
          <Card
            imgUrl={service[0].imgUrl}
          />
        </div>
        <div className="imgset col-lg-3">
          <Card
            imgUrl={service[1].imgUrl}
          />
        </div>
        <div className="imgset col-lg-3">
          <Card
            imgUrl={service[2].imgUrl}
          />
        </div>
        <div className="imgset col-lg-3">
          <Card
            imgUrl={service[3].imgUrl}
          />
        </div>
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
