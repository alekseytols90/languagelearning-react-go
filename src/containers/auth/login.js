import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/auth";

const LoginForm = ({ onSubmit, error }) => {
  const onFinish = values => {
    onSubmit(values);
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div className="auth-title mb-4">
        <h3>Log In</h3>
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
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!"
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot text-right" to="/forgot-password">
          Forgot password
        </Link>
      </Form.Item>
      {error && <p className="error">{error}</p>}
      <button
        type="submit"
        className="covid-btn covid-success"
      >
        Log in
      </button><br />
      <Link className="mt-4" to="/register">
        Create a New Account
      </Link>
    </Form>
  );
};

class Login extends Component {
  render() {
    return (
      <div className="auth">
        <LoginForm
          onSubmit={this.props.loginUser}
          error={this.props.errorMessage}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
