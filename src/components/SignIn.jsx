import React from "react";
import { ReactComponent as Ellipse } from "../assets/Ellipse.svg";
import { ReactComponent as Vector } from "../assets/Vector.svg";
import { ReactComponent as Git } from "../assets/Git.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Discord } from "../assets/Discord.svg";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as Apple } from "../assets/Apple.svg";

const SignIn = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          {<Ellipse />}
          {<Vector />}
        </div>
        <div className="base-text">BASE</div>
        <div className="social-links">
          <div>{<Git />}</div>
          <div>{<Twitter />}</div>
          <div>{<Linkedin />}</div>
          <div>{<Discord />}</div>
        </div>
      </div>
      <div className="main-content">
        <h1 className="sign-in-title">Sign In</h1>
        <p className="sign-in-subtitle">Sign in to your account</p>
        <div className="auth-buttons">
          <button className="google-auth">
            {" "}
            <Google /> Sign in with Google
          </button>
          <button className="apple-auth">
            {" "}
            <Apple /> Sign in with Apple
          </button>
        </div>

        <div className="login-form">
          <label htmlFor="email" className="email-label">
            Email address
          </label>
          <input type="email" id="email" className="email-input" />
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <input type="password" id="password" className="password-input" />
          <div className="forgot-password">Forgot password?</div>
          <button className="sign-in-button">Sign In</button>
          <div>
            <p className="register-prompt">
              Don’t have an account?{" "}
              <span className="register-link">Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
