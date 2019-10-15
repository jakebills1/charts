import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const { authenticated, handleLogout } = this.props.auth;
    if (authenticated) {
      return (
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li onClick={() => handleLogout(this.props.history)}>Logout</li>
        </ul>
      );
    } else {
      return (
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </ul>
      );
    }
  }
}
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}
export default withRouter(ConnectedNavbar);
