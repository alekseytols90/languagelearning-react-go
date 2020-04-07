import React from "react";
import { Row } from "reactstrap";
import { Tag, Input } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const StepSix = (props) => {
  return (
    <div className="step">
      <h4>My Interests</h4>
      <Row className="m-0 mt-3 mb-2">
        {props.interests.length > 0 &&
          props.interests.map((item, index) => {
            return (
              <Tag
                className="site-tag-check"
                onClick={() => props.onRemoveInterest(item)}
                key={index}
              >
                <CheckOutlined />
                &nbsp;{item.interest_name}
              </Tag>
            );
          })}
      </Row>
      <h4>Select Interests</h4>
      <Row className="m-0 mt-3">
        {props.interestList.length > 0 &&
          props.interestList.map((item, index) => {
            return (
              <Tag
                className="site-tag-plus"
                onClick={() => props.onClickInterest(item)}
                key={index}
              >
                <PlusOutlined />
                &nbsp;{item.interest_name}
              </Tag>
            );
          })}
      </Row>
      <Row className="m-0 mt-3">
        <TextArea
          className="statement mb-3"
          placeholder="Personal Statement"
          onChange={(e) => props.onChange(e.target.value, "statement")}
        />
      </Row>
    </div>
  );
};

export default StepSix;
