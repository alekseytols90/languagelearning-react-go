import React from "react";
import { Form, Input, Select } from "antd";
import { Col, Row } from "reactstrap";

const CreateForm = ({
  orgID,
  createChallenge,
  updateChallenge,
  curChallenge,
  hideChallengePage,
  error,
}) => {
  const onFinish = (values) => {
    values.organization_id = orgID;
    if (curChallenge._id) {
      values._id = curChallenge._id;
      updateChallenge(values);
    } else {
      createChallenge(values);
    }
    hideChallengePage();
  };
  return (
    <Form
      name="create-challenge"
      className="create-challenge-form"
      initialValues={{ ...curChallenge }}
      onFinish={onFinish}
    >
      <div className="create-challenge-title mb-4">
        <h3>Add/Edit Challenge:</h3>
      </div>
      <Row>
        <Col md={9}>
          <Form.Item
            name="challenge_name"
            rules={[
              {
                required: true,
                message: "Please input the callenge name!",
              },
            ]}
          >
            <Input type="text" placeholder="Name"/>
          </Form.Item>
        </Col>
        <Col md={3}>
          <Form.Item name="status">
            <Select
              placeholder="Private/Public"
              rules={[
                {
                  required: true,
                  message: "Please select the callenge status!",
                },
              ]}
            >
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="public">Public</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="geography" >
        <Input.TextArea placeholder="Geography" />
      </Form.Item>
      <Form.Item name="description">
        <Input.TextArea placeholder="Description" />
      </Form.Item>
      {error && <p className="error">{error}</p>}
      <div className="flex">
        <button type="submit" className="covid-btn covid-success mr-2">
          Submit
        </button>
        <button className="covid-btn covid-primary" onClick={hideChallengePage}>
          Cancel
        </button>       
      </div>
    </Form>
  );
};

const CreateChallenge = (props) => {
  return (
    <div className="mt-5 auth">
      <CreateForm {...props} />
    </div>
  );
};

export default CreateChallenge;
