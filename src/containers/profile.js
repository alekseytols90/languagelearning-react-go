import React, { Component } from "react";
import cookie from "react-cookies";
import { connect } from "react-redux";
import { listOrganization } from "../actions/organization";
import { fetchUser, updateUserProfile } from "../actions/index";
import { listLanguage, listSkill, listInterest } from "../actions/profile";

import {
  StageBar,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  FooterButton,
} from "../components/profile";
import Header from "../components/template/header";

class Profile extends Component {
  state = {
    orgInfo: null,
    address: "",
    country: "",
    phone: "",
    photo: null,
    twitter: "",
    linkedin: "",
    facebook: "",
    web: "",
    languages: [],
    skills: [],
    interests: [],
    statement: "",
    isComplete: false,
    stage: 0,
    error: "",
  };

  componentDidMount = () => {
    const user = cookie.load("user");
    this.props.fetchUser(user._id);
    this.props.listOrganization();
    this.props.listLanguage();
    this.props.listSkill();
    this.props.listInterest();
  };

  handleUpload = (e) => {
    this.setState({ photo: e.file });
  };

  handleOnChange = (value, name) => {
    this.setState({ [name]: value });
  };

  confirmState = (stage, info, error) => {
    if (info) this.setState({ stage: stage + 1, error: "" });
    else this.setState({ error });
  };

  handleClickNext = (e) => {
    const {
      stage,
      orgInfo,
      address,
      country,
      phone,
      photo,
      languages,
      skills,
      interests,
      error,
    } = this.state;
    switch (stage) {
      case 0:
        return this.confirmState(
          stage,
          orgInfo,
          "Please Choose your organization!"
        );
      case 1:
        let addressInfo = false;
        if (address !== "" && country !== "" && phone !== "")
          addressInfo = true;
        return this.confirmState(
          stage,
          addressInfo,
          "Please insert the correct information!"
        );
      case 2:
        return this.confirmState(stage, photo, "Please upload your photo!");
      case 3:
        if (languages.length > 0)
          return this.setState({ stage: stage + 1, error: "" });
        else return this.setState({ error: "Please choose a language!" });
      case 4:
        if (skills.length > 0)
          return this.setState({
            stage: stage + 1,
            error: "",
            isComplete: true,
          });
        else return this.setState({ error: "Please choose a skill!" });
      case 5:
        if (interests.length > 0)
          return this.setState({ stage: stage + 1, error: "" });
        else return this.setState({ error: "Please choose a interest!" });
      default:
        return error;
    }
  };

  handleClickComplete = (e) => {
    const {
      orgInfo,
      address,
      country,
      phone,
      photo,
      languages,
      skills,
      interests,
      statement,
      twitter,
      linkedin,
      facebook,
      web,
    } = this.state;
    const curUserId = this.props.profile._id;
    const languageIds = languages.map((item) => item._id);
    const skillIds = skills.map((itm) => itm._id);
    const interestIds = interests.map((i) => i._id);
    let curProfile = { ...this.props.profile.profile };

    curProfile = {
      org_id: orgInfo._id,
      org_name: orgInfo.org_name,
      address: address,
      country: country,
      phone: phone,
      personal_statement: statement,
      twitter: twitter,
      linkedin: linkedin,
      facebook: facebook,
      web: web,
      languages: languageIds,
      skills: skillIds,
      interests: interestIds,
    };
    const sendData = {
      _id: curUserId,
      profile: curProfile,
    };
    this.props.updateUserProfile(sendData);
    this.props.history.push("dashboard");
  };

  handleClickOrg = (org) => {
    this.setState({ orgInfo: org, error: "" });
  };

  handleCreateOrg = (e) => {
    this.props.history.push("register-org");
  };

  handleOnClickLanguage = (item) => {
    const curLang = [...this.state.languages];
    let result = curLang.filter((itm) => itm._id === item._id);
    if (result.length > 0) return;
    curLang.push(item);
    this.setState({ languages: curLang, error: "" });
  };

  handleOnRemoveLanguage = (item) => {
    const curLang = [...this.state.languages];
    let result = curLang.filter((itm) => itm._id !== item._id);
    if (result.length === 0) return;
    this.setState({ languages: result });
  };

  handleOnClickSkill = (item) => {
    const curSkill = [...this.state.skills];
    let result = curSkill.filter((itm) => itm._id === item._id);
    if (result.length > 0) return;
    curSkill.push(item);
    this.setState({ skills: curSkill, error: "" });
  };

  handleOnRemoveSkill = (item) => {
    const curSkill = [...this.state.skills];
    let result = curSkill.filter((itm) => itm._id !== item._id);
    if (result.length === 0) return;
    this.setState({ skills: result });
  };

  handleOnClickInterest = (item) => {
    const curInterest = [...this.state.interests];
    let result = curInterest.filter((itm) => itm._id === item._id);
    if (result.length > 0) return;
    curInterest.push(item);
    this.setState({ interests: curInterest, error: "" });
  };

  handleOnRemoveInterest = (item) => {
    const curInterest = [...this.state.interests];
    let result = curInterest.filter((itm) => itm._id !== item._id);
    if (result.length === 0) return;
    this.setState({ interests: result });
  };

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="profile">
          <div className="mt-4 p-2 mb-5">
            <h4>Participant Registration Flow</h4>
          </div>
          <StageBar stage={this.state.stage} />
          {this.state.error && (
            <p className="error text-center">{this.state.error}</p>
          )}
          {this.state.stage === 0 && (
            <StepOne
              orgs={this.props.orgs}
              onClickOrg={this.handleClickOrg}
              onClickCreateOrg={this.handleCreateOrg}
            />
          )}
          {this.state.stage === 1 && <StepTwo onChange={this.handleOnChange} />}
          {this.state.stage === 2 && (
            <StepThree
              onChange={this.handleOnChange}
              onUpload={this.handleUpload}
            />
          )}
          {this.state.stage === 3 && (
            <StepFour
              languages={this.state.languages}
              languageList={this.props.languageList}
              onRemoveLanguage={this.handleOnRemoveLanguage}
              onClickLanguage={this.handleOnClickLanguage}
            />
          )}
          {this.state.stage === 4 && (
            <StepFive
              skills={this.state.skills}
              skillList={this.props.skillList}
              onRemoveSkill={this.handleOnRemoveSkill}
              onClickSkill={this.handleOnClickSkill}
            />
          )}
          {this.state.stage === 5 && (
            <StepSix
              onChange={this.handleOnChange}
              interests={this.state.interests}
              interestList={this.props.interestList}
              onRemoveInterest={this.handleOnRemoveInterest}
              onClickInterest={this.handleOnClickInterest}
            />
          )}
          <FooterButton
            isComplete={this.state.isComplete}
            onClickNext={this.handleClickNext}
            onClickComplete={this.handleClickComplete}
          />
        </div>
      </React.Fragment>
    );
  };
}

function mapStateToProps(state) {
  return {
    profile: state.user.profile,
    orgs: state.organization.organizations,
    languageList: state.profile.languageList,
    skillList: state.profile.skillList,
    interestList: state.profile.interestList,
  };
}

export default connect(mapStateToProps, {
  fetchUser,
  updateUserProfile,
  listOrganization,
  listLanguage,
  listSkill,
  listInterest,
})(Profile);
