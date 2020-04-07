import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { List, Input, Avatar, Card } from "antd";

const { Search } = Input;
const { Meta } = Card;

const Challenges = (props) => (
  <div className="list-view">
    <h4>{props.name}&nbsp;Challenges</h4>
    <Link className="btn list-view-btn" to="#" onClick={props.onClickCreate}>
      Create New Challenge
    </Link>
    <Row>
      {props.challenges.map((item, index) => {
        return (
          <Card className="homepage-card" key={index}>
            <Meta
              title={item.challenge_name}
              description={item.description}
              onClick={() => props.onClickChallenge(item)}
            />
          </Card>
        );
      })}
    </Row>
  </div>
);

const Users = (props) => (
  <div className="list-view">
    <h4>{props.name}&nbsp;Participants</h4>
    <Row className="m-0 p-0">
      <Col md={8} sm={12}>
        <Search
          placeholder="Search Participants"
          onSearch={(value) => console.log(value)}
          style={{ width: "100%" }}
        />
      </Col>
      <Col md={4} sm={12}>
        <Link className="btn list-view-btn" to="#">
          Invite
        </Link>
      </Col>
    </Row>
    <List
      itemLayout="horizontal"
      dataSource={props.users}
      renderItem={(item) => (
        <Card className="homepage-card name">
          <Meta title={item.userName} avatar={<Avatar src={item.avatar} />} />
        </Card>
      )}
    />
  </div>
);

const Homepage = (props) => {
  return (
    <Row className="p-5 m-0">
      <Col md={8} sm={12}>
        <Challenges {...props} />
      </Col>
      <Col md={4} sm={12}>
        <Users {...props} />
      </Col>
    </Row>
  );
};

export default Homepage;
