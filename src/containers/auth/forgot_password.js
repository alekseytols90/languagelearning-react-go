import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getForgotPasswordToken } from "../../actions/auth";
import history from "../../history";
import { Link } from "react-router-dom";

const ForgotForm = ({ onSubmit, error }) => {
  const onFinish = values => {
    onSubmit(values);
  };

  return (
    <Form name="forgot" className="forgot-form" onFinish={onFinish}>
      <div className="auth-title mb-4">
        <h3>Forgot Password</h3>
        <Link to="/">Back to Home</Link>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!"
          }
        ]}
      >
        <Input
          type="email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="covid-btn covid-success">
        Reset Password
      </button>
    </Form>
  );
};

class ForgotPassword extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      history.push("/dashboard");
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.authenticated) {
      history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="auth">
        <ForgotForm
          onSubmit={this.props.getForgotPasswordToken}
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

export default connect(mapStateToProps, { getForgotPasswordToken })(
  ForgotPassword
);
