import React from "react";
import { Col, Row } from "reactstrap";
import { Tag } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";

const StepFour = (props) => {
  return (
    <div className="step">
      <h4>Languages</h4>
      <Row className="m-0 mt-3 mb-2">
        {props.languages.length > 0 &&
          props.languages.map((item, index) => {
            return (
              <Tag
                className="site-tag-check"
                onClick={() => props.onRemoveLanguage(item)}
                key={index}
              >
                <CheckOutlined />
                &nbsp;{item.language_name}
              </Tag>
            );
          })}
      </Row>
      <h4>Select Languages</h4>
      <Row className="m-0 mt-3">
        {props.languageList.length > 0 &&
          props.languageList.map((item, index) => {
            return (
              <Tag
                className="site-tag-plus"
                onClick={() => props.onClickLanguage(item)}
                key={index}
              >
                <PlusOutlined />
                &nbsp;{item.language_name}
              </Tag>
            );
          })}
      </Row>
    </div>
  );
};

export default StepFour;
