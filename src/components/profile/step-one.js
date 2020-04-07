import React from "react";
import { Col, Row } from "reactstrap";
import { List, Input, Avatar, Card } from "antd";

import orgLogo from "../../assets/dummyImg/sample_logo.jpg";

let node;
const { Search } = Input;
const { Meta } = Card;

const StepOne = (props) => {
  return (
    <div className="step">
      <h4>Organization</h4>
      <Row className="mb-5">
        <Col md={8} sm={6} className="mt-1">
          <Search
            placeholder="Find Organizations"
            onSearch={(value) => console.log(value)}
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={4} sm={6} className="mt-1">
          <button
            className="btn btn-secondary w-100"
            onClick={props.onClickCreateOrg}
          >
            New Organization
          </button>
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        dataSource={props.orgs}
        renderItem={(item) => (
          <Card
            className="org-list-card"
            onClick={() => props.onClickOrg(item)}
          >
            <Meta title={item.org_name} avatar={<Avatar src={orgLogo} />} />
          </Card>
        )}
      />
    </div>
  );
};

export default StepOne;
