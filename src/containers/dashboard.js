import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { protectedTest } from "../actions/auth";
import { listOrganization } from "../actions/organization" 
import Header from "../components/template/header";
import { List, Avatar } from "antd"

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  componentDidMount() {
    this.props.listOrganization()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="dashboard">
          <div className="auth">
            <h2>Welcome, you are logged in</h2>
            <List
              itemLayout="horizontal"
              dataSource={this.props.organization.organizations}
              renderItem={item => (
                <List.Item key={item.title} className={"org-item"} >
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<Link to={`/organization/${item._id}`}>{item.org_name}</Link>}
                    description={`${item.org_type}, ${item.address}, ${item.country}`}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { organization: state.organization };
}

export default connect(mapStateToProps, { protectedTest, listOrganization })(Dashboard);
