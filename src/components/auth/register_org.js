import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { registerOrg } from "../../actions/auth";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const OrgSignupForm = ({ onSubmit, error }) => {
  let file
  const onFinish = values => {
    values.logo = file ? file.originFileObj : null
    console.log("Received values of form: ", values);
    onSubmit(values);
  };

  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleUpload = e => {
    file = e.file
  }

  return (
    <Form name="org_register" className="org-register-form" onFinish={onFinish}>
      <div className="auth-title mb-4">
        <h3>Register Organization</h3>
        <Link to="/">Back to Home</Link>
      </div>
      <Form.Item
        name="logo"
        label="Logo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload onChange={handleUpload} listType="picture">
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>
      <b>General Info</b>
      <Row>
        <Col md={6} sm={12}>
          <Form.Item
            name="org_name"
            rules={[
              {
                required: true,
                message: "Please input the organization name!"
              }
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="country">
            <Select placeholder="Country">
              <Select.Option value="united state">United State</Select.Option>
              <Select.Option value="russia">Russia</Select.Option>
              <Select.Option value="united kindom">
                United Kingdom
              </Select.Option>
              <Select.Option value="german">German</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="website">
            <Input placeholder="Website" />
          </Form.Item>
        </Col>
        <Col md={6} sm={12}>
          <Form.Item name="org_type">
            <Select placeholder="Type">
              <Select.Option value="type1">Type1</Select.Option>
              <Select.Option value="type2">Type2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input the orgnaization address!"
              }
            ]}
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item name="agree_terms">
            <Input placeholder="Agree Terms" />
          </Form.Item>
        </Col>
      </Row>
      <b>Authourized Info</b>
      <Row>
        <Col md={6} sm={12}>
          <Form.Item name="authorized_name">
            <Input placeholder="Authourized Name" />
          </Form.Item>
          <Form.Item name="authorized_title">
            <Input placeholder="Authourized Title" />
          </Form.Item>
        </Col>
        <Col md={6} sm={12}>
          <Form.Item name="authorized_email">
            <Input type="email" placeholder="Authourized Email" />
          </Form.Item>
          <Form.Item name="authorized_phone">
            <Input placeholder="Authourized Phone" />
          </Form.Item>
        </Col>
      </Row>
      <b>Contact Info</b>
      <Row>
        <Col md={6} sm={12}>
          <Form.Item name="contact_name">
            <Input placeholder="Contact Name" />
          </Form.Item>
          <Form.Item name="contact_email">
            <Input type="email" placeholder="Contact Email" />
          </Form.Item>
        </Col>
        <Col md={6} sm={12}>
          <Form.Item name="contact_phone">
            <Input placeholder="Contact Phone" />
          </Form.Item>
        </Col>
      </Row>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="covid-btn covid-success">
        Register
      </button>
    </Form>
  );
};

class RegisterOrg extends Component {
  render() {
    return (
      <div className="auth auth-wide">
        <OrgSignupForm
          onSubmit={this.props.registerOrg}
          error={this.props.errorMessage}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, { registerOrg })(RegisterOrg);
