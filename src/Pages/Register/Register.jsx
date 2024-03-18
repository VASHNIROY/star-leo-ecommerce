import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const baseUrl = import.meta.env.VITE_BASE_URL;
const Register = () => {
  const navigate = useNavigate();

  //   const [vendorId, updateVendorId] = useState("");
  const [gender, updateGender] = useState("");
  const [RegistrationError, updateRegistrationError] = useState("");
  const [fullName, updateFullName] = useState("");
  const [email, updateEmail] = useState("");
  const [mobileNumber, updateMobileNumber] = useState("");
  const [DOB, updateDOB] = useState("");
  const [registrationPassword, updatePassword] = useState("");

  const submitRegistration = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();

      //   formData.append("vendor_id", vendorId);
      formData.append("gender", gender);
      formData.append("full_name", fullName);
      formData.append("email", email);
      formData.append("mobile_no", mobileNumber);
      formData.append("dob", DOB);
      formData.append("password", registrationPassword);

      const response = await fetch(`${baseUrl}signup`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data, "registration status");

      if (data.status) {
        navigate("/login");
        // updateVendorId("");
        updateGender("");
        updateEmail("");
        updateFullName("");
        updateMobileNumber("");
        updatePassword("");
        updateDOB("");
        updateRegistrationError("");
      } else {
        updateRegistrationError(data.message);
      }
    } catch (error) {
      console.error("Error submitting Registration details:", error);
      updateRegistrationError(error);
    }
  };

  return (
    <div className="register-page-main-container">
      <div className="register-page-container1">
        <h4 className="register-page-heading">Register</h4>
        {/* <div className="register-page-input-container">
          <label className="register-page-label">Vendor Id *</label>
          <input
            className="register-page-input"
            value={vendorId}
            type="text"
            onChange={(e) => updateVendorId(e.target.value)}
            required
          />
        </div> */}
        <div className="register-page-input-container">
          <label className="register-page-label">Mobile no *</label>
          <input
            value={mobileNumber}
            type="number"
            className="register-page-input"
            onChange={(e) => updateMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className="register-page-input-container">
          <label className="register-page-label">Full Name *</label>
          <input
            type="text"
            value={fullName}
            className="register-page-input"
            onChange={(e) => updateFullName(e.target.value)}
            required
          />
        </div>
        <div className="register-page-input-container">
          <label className="register-page-label">Email *</label>
          <input
            type="email"
            value={email}
            className="register-page-input"
            onChange={(e) => updateEmail(e.target.value)}
            required
          />
        </div>
        <div className="register-page-input-container">
          <label className="register-page-label">Gender *</label>
          <input
            type="text"
            value={gender}
            className="register-page-input"
            onChange={(e) => updateGender(e.target.value)}
            required
          />
        </div>
        <div className="register-page-input-container">
          <label className="register-page-label">Date of Birth(DOB)</label>
          <input
            className="register-page-input"
            type="date"
            value={DOB}
            onChange={(e) => updateDOB(e.target.value)}
            required
          />
        </div>
        <div className="register-page-input-container">
          <label className="register-page-label">Password *</label>
          <input
            className="register-page-input"
            type="password"
            value={registrationPassword}
            onChange={(e) => updatePassword(e.target.value)}
            required
          />
        </div>

        <p className="register-page-text">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="register-page-text">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <button onClick={submitRegistration} className="register-page-button">
          Register
        </button>
        {RegistrationError && (
          <p className="error-message" style={{ color: "red" }}>
            {RegistrationError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
