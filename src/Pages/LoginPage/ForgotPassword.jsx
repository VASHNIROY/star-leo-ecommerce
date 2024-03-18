import "./index.css";
const ForgotPassword = () => {
  return (
    <div className="login-page-main-container">
      <div className="login-page-container1">
        <h1 className="login-page-heading">Forgot Password</h1>
        <p className="login-page-text">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <div className="login-page-input-container">
          <label className="login-page-label">Username or Email</label>
          <input className="login-page-input" />
        </div>
        <button className="login-page-button">Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
