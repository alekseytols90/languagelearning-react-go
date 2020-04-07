import React from "react";
import { Row } from "reactstrap";
import { Tag } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const StepFive = (props) => {
  return (
    <div className="step">
      <h4>Skills</h4>
      <Row className="m-0 mt-3 mb-2">
        {props.skills.length > 0 &&
          props.skills.map((item, index) => {
            return (
              <Tag
                className="site-tag-check"
                onClick={() => props.onRemoveSkill(item)}
                key={index}
              >
                <CheckOutlined />
                &nbsp;{item.skill_name}
              </Tag>
            );
          })}
      </Row>
      <h4>Select Skills</h4>
      <Row className="m-0 mt-3">
        {props.skillList.length > 0 &&
          props.skillList.map((item, index) => {
            return (
              <Tag
                className="site-tag-plus"
                onClick={() => props.onClickSkill(item)}
                key={index}
              >
                <PlusOutlined />
                &nbsp;{item.skill_name}
              </Tag>
            );
          })}
      </Row>
    </div>
  );
};

export default StepFive;
