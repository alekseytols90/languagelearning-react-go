import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { List, Input, Avatar } from "antd";

const { Search } = Input;

const Challenges = (props) => (
  <div className="list-view">
    <h4>{props.name}&nbsp;Challenges</h4>
    <Link className="btn list-view-btn" to="#" onClick={props.onClickCreate}>
      Create New Challenge
    </Link>
    <List
      itemLayout="horizontal"
      dataSource={props.challenges}
      renderItem={(item) => (
        <List.Item className="challenge_item">
          <List.Item.Meta
            title={item.challenge_name}
            description={item.description}
            onClick={() => props.onClickChallenge(item)}
          />
        </List.Item>
      )}
    />
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
        <List.Item>
          <List.Item.Meta
            title={item.userName}
            description={item.email}
            avatar={<Avatar src={item.avatar} />}
          />
        </List.Item>
      )}
    />
  </div>
);

const Homepage = (props) => {
  return (
    <Row className="p-5 m-0 mt-5">
      <Col md={6} sm={12}>
        <Challenges {...props} />
      </Col>
      <Col md={6} sm={12}>
        <Users {...props} />
      </Col>
    </Row>
  );
};

export default Homepage;
