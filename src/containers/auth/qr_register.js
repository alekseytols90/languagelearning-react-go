import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { registerUser } from "../../actions/auth";

const SignupForm = ({ newUser, onSubmit, error }) => {
  const onFinish = values => {
    newUser.password = values.password
    newUser.conf_password = values.conf_password
    onSubmit(newUser);
  };

  return (
    <Form
      name="register"
      className="register-form"
      onFinish={onFinish}
    >
      <div className="auth-title mb-4">
        <h3>Please create a password for the COVID challenge</h3>
      </div>
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
      <Form.Item
        name="conf_password"
        rules={[
          {
            required: true,
            message: "Please confirm your Password!"
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      {error && <p className="error">{error}</p>}
      <button
        type="submit"
        className="covid-btn covid-success"
      >
        Complete Registeration
      </button>
    </Form>
  );
};

class QRRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      withParams: false,
      newUser: {}
    }
  }

  componentDidMount() {
    const paramsString = this.props.location.search
    if (paramsString) {
      const params = new URLSearchParams(paramsString); 
      this.setState({ 
        withParams: true,
        newUser: {
          first_name: params.get("fname"),
          last_name: params.get("lname"),
          email: params.get("email"),
          integra_id: params.get("integraID")
        }
       })
    }
  }

  render() {
    const { withParams, newUser } = this.state
    return (
      <React.Fragment>
        <div className="dashboard">
          <div className="auth">
            <h2 className="mb-5">COVID Challenge User Registeration</h2>
            {!withParams && (
              <h5>Please visit the apple store or google play store and download the Integra Identity App to register for the event.</h5>
            )}
            {withParams && (
              <SignupForm newUser={newUser} onSubmit={this.props.registerUser} error={this.props.errorMessage} />
            )}
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, { registerUser })(QRRegister);
