import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { protectedTest } from '../../actions/auth';
import Header from "../template/header";
import Imgbg from "../../assets/img/home-bg.jpg"

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="dashboard" style={{backgroundImage: `url(${Imgbg})`}}>
          <div className="dashboard-title">
            <h2>Welcome, you are logged in</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, { protectedTest })(Dashboard);
