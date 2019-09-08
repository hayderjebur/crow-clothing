import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./signIn-styles.scss";
import CustomButton from "../custom.button/custom.button.component";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.perevntDefault();
    this.state({
      email: "",
      password: ""
    });
  };
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleOnChange}
            required
          />

          <FormInput
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleOnChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google Account
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
