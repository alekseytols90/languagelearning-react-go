import React from "react";
import { Route, Switch } from "react-router-dom";
// Import miscellaneous routes and other requirements
import NotFoundPage from "./components/pages/not-found-page";

// Import static pages
import HomePage from "./components/pages/home-page";
import ContactPage from "./components/pages/contact-page";
import ComponentSamplesPage from "./components/pages/component-samples";
import Organization from "./containers/organization";

// Import authentication related pages
import Register from "./containers/auth/register";
import RegisterOrg from "./containers/auth/register_org";
import Login from "./containers/auth/login";
import Logout from "./containers/auth/logout";
import ForgotPassword from "./containers/auth/forgot_password";
import ResetPassword from "./containers/auth/reset_password";
import QRRegister from "./containers/auth/qr_register";

// Import dashboard pages
import Dashboard from "./containers/dashboard";
import Profile from "./containers/profile";
import Inbox from "./components/dashboard/messaging/inbox";
import Conversation from "./components/dashboard/messaging/conversation";
import ComposeMessage from "./components/dashboard/messaging/compose-message";
import BillingSettings from "./components/billing/settings";

// Import billing pages
import InitialCheckout from "./components/billing/initial-checkout";

// Import admin pages
import AdminDashboard from "./components/admin/dashboard";

// Import higher order components
import RequireAuth from "./containers/auth/require_auth";

const Routes = () => (
  <div className="layout">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="contact-us" component={ContactPage} />
      <Route
        path="component-samples"
        component={RequireAuth(ComponentSamplesPage)}
      />
      <Route path="/register" component={Register} />
      <Route path="/register-org" component={RegisterOrg} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password/:resetToken" component={ResetPassword} />
      <Route path="/QRregister" component={QRRegister} />
      
      <Route path="/organization/:id" component={Organization} />

      <Route path="/checkout/:plan" component={RequireAuth(InitialCheckout)} />
      <Route
        path="/billing/settings"
        component={RequireAuth(BillingSettings)}
      />
      <Route path="/profile" component={RequireAuth(Profile)} />

      <Route path="/admin" component={RequireAuth(AdminDashboard)} />
      <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route path="/dashboard/inbox" component={RequireAuth(Inbox)} />
      <Route
        path="/dashboard/conversation/new"
        component={RequireAuth(ComposeMessage)}
      />
      <Route
        path="/dashboard/conversation/view/:conversationId"
        component={RequireAuth(Conversation)}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Routes;
