import React, { Component } from 'react';
import { connect } from 'react-redux';
import { protectedTest } from '../../actions/auth';
import Header from "../template/header";

const ImgBg = "https://plast-asset.s3.amazonaws.com/earth-surrounded-by-coronavirus-microbes.jpg"

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="dashboard" style={{backgroundImage: `url(${ImgBg})`}}>
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
