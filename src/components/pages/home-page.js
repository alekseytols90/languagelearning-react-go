import React, { Component } from "react";
import ImgFt from "../../assets/img/ft.jpg";
import ImgHack from "../../assets/img/hack.jpg";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-main">
          <h1 className="mb-5">The COVID-19 Challenge</h1>
          <h4 className="mb-5">A collaboration of</h4>
          <Row className="mb-4">
            <Col>
              <img src={ImgFt} alt="FT" />
            </Col>
            <Col>
              <img src={ImgHack} alt="Hackathon" />
            </Col>
          </Row>
          <Link className="covid-btn covid-primary" to="/register-org">
            Register an Organization
          </Link>
          <Link className="covid-btn covid-primary" to="/register">
            Register an Individual
          </Link>
          <Link className="covid-btn covid-success" to="/login">
            Log In
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
