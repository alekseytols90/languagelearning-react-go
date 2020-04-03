import React, { Component } from 'react';
import Header from "../template/header";

const ImgBg = "https://plast-asset.s3.amazonaws.com/earth-surrounded-by-coronavirus-microbes.jpg"

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="dashboard" style={{backgroundImage: `url(${ImgBg})`}}>
          <div className="dashboard-title">
            <h2>Challenge Management</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
