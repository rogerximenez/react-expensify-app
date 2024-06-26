import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Log In To Your Account</h1>
      <p className="secondary-text">Get your expenses under control.</p>
      <button className="btn-primary" onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)