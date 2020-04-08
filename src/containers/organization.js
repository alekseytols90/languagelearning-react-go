import React, { Component } from "react";
import { connect } from "react-redux";
import { Mark, CreateChallenge, Homepage } from "../components/organization";
import {
  getOrganization,
  setCurrentOrganization,
} from "../actions/organization";
import {
  listChallenge,
  createChallenge,
  updateChallenge,
} from "../actions/challenge";
import orgLogo from "../assets/dummyImg/sample_logo.jpg";

import Header from "../components/template/header";

const users = [
  {
    userId: 0,
    userName: "Robin Hood",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    email: "admin@test.com",
  },
  {
    userId: 1,
    userName: "Richard Johnson",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    email: "user@test.com",
  },
];

class Organization extends Component {
  state = {
    isCreate: false,
    curChallenge: {},
  };

  handleCreate = (e) => {
    let curOrg = this.props.organization.currentOrganization;
    this.setState({
      isCreate: true,
      curChallenge: { organization_id: curOrg._id, status: "private" },
    });
  };

  componentDidMount() {
    const {
      match,
      organization,
      getOrganization,
      listChallenge,
      setCurrentOrganization,
    } = this.props;
    let id = match.params.id;
    let curOrg;
    for (let org of organization.organizations) {
      if (org._id === id) {
        curOrg = org;
      }
    }
    if (curOrg) {
      setCurrentOrganization(curOrg);
    } else {
      getOrganization(id);
    }
    listChallenge(id);
  }

  onClickChallenge = (challenge) => {
    this.setState({ isCreate: true, curChallenge: challenge });
  };

  hideChallengePage = () => {
    this.setState({ isCreate: false });
  };

  render() {
    const {
      organization,
      challenge,
      createChallenge,
      updateChallenge,
    } = this.props;
    let curOrg = organization.currentOrganization;
    let challenges = challenge.challenges;
    return (
      <React.Fragment>
        <Header />
        <div className="homepage">
          <div className="hompage-title p-2 mb-5">
            <h4>Organization Home Page</h4>
          </div>
          <Mark orgLogo={orgLogo} orgName={curOrg.org_name} />
          {!this.state.isCreate ? (
            <Homepage
              challenges={challenges}
              users={users}
              onClickCreate={this.handleCreate}
              onClickChallenge={this.onClickChallenge}
              name={curOrg.org_name}
            />
          ) : (
            <CreateChallenge
              orgID={curOrg._id}
              curChallenge={this.state.curChallenge}
              createChallenge={createChallenge}
              updateChallenge={updateChallenge}
              hideChallengePage={this.hideChallengePage}
              error={challenge.error}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { organization: state.organization, challenge: state.challenge };
}

export default connect(mapStateToProps, {
  getOrganization,
  setCurrentOrganization,
  listChallenge,
  createChallenge,
  updateChallenge,
})(Organization);
