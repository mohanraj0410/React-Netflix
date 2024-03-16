import React, { useState } from "react";

const Login = () => {
  let [isSignInForm, setISSignInForm] = useState(true);
  let change = () => {
    setISSignInForm(!isSignInForm);
  };
  return (
    <div className="SignIn-page">
      <div className="SignIn-container">
        {
            isSignInForm?
            <form className="SignIn-form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Sign In</button>
          <p className="SignIn-or-SignUp">
            {isSignInForm ? (
              <div>
                New to Netflix? <a onClick={change}>Sign Up</a> Now
              </div>
            ) : (
              <div>
                Already registered? <a onClick={change}>Sign In</a> Now
              </div>
            )}
          </p>
        </form>:<form className="SignIn-form">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Sign Up</button>
          <p className="SignIn-or-SignUp">
            {isSignInForm ? (
              <div>
                New to Netflix? <a onClick={change}>Sign Up</a> Now
              </div>
            ) : (
              <div>
                Already registered? <a onClick={change}>Sign In</a> Now
              </div>
            )}
          </p>
        </form>
        }
      </div>
    </div>
  );
};

export default Login;
