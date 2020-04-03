import React, { Component } from 'react';
import ImgBg from "../../assets/img/home-bg.jpg"
import Header from "../template/header";

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
