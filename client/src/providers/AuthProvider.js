import React from "react";
import axios from "axios";
import { connect } from "react-redux";
const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
class AuthProvider extends React.Component {
  handleRegister = (user, history) => {
    axios
      .post("/api/auth", user)
      .then(res => {
        this.props.setUser(res.data.data);
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
    // sends api call to register path, if successful populates context with that user, and pushes to home
  };

  handleLogin = (user, history) => {
    axios
      .post("/api/auth/sign_in", user)
      .then(res => {
        this.props.setUser(res.data.data);
        history.push("/");
      })
      .catch(res => {
        console.log(res);
      });
    // same as handleRegister, but different api path
  };

  handleLogout = history => {
    axios
      .delete("/api/auth/sign_out")
      .then(res => {
        this.props.setUser(null);
        history.push("/login");
      })
      .catch(res => {
        console.log(res);
      });
    // sends api call to sign_out path, removes user data from state, and pushes to login page
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticated: this.props.user !== null,
          handleRegister: this.handleRegister,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          setUser: user => this.props.setUser(user)
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};
const mapDispatchToProps = dispatch => {
  return { setUser: user => dispatch({ type: "SET_USER", user }) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthProvider);
