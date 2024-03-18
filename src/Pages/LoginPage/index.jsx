// import { Checkbox } from "@material-ui/core";
// import "./index.css";
// import Cookies from "js-cookie";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [login, setLogin] = useState("");

//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   console.log(login);

//   console.log(password);
//   const baseUrl = import.meta.env.VITE_BASE_URL;

//   const submitLoginDetails = async () => {
//     const loginData = {
//       email_or_mobile: login,
//       password: password,
//     };

//     console.log(loginData);

//     const loginFormData = new FormData();

//     Object.entries(loginData).forEach(([key, value]) => {
//       loginFormData.append(key, value);
//     });

//     console.log("api", `${baseUrl}login`);
//     try {
//       const response = await fetch(`${baseUrl}login`, {
//         method: "POST",
//         body: loginFormData,
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       // Handle success response from the API
//       const userCookies = Cookies.set("userid", data.user_id);

//       setLogin("");
//       setPassword("");
//       if (userCookies !== "undefined") {
//         return navigate("/checkout");
//       }
//     } catch (error) {
//       // Handle error response from the API
//       console.error("Error submitting login details:", error);
//     }
//   };
//   return (
//     <div className="login-page-main-container">
//       <div className="login-page-container1">
//         <h4 className="login-page-heading">Login</h4>
//         <div className="login-page-input-container">
//           <label className="login-page-label">
//             Username or email address *
//           </label>
//           <input
//             className="login-page-input"
//             value={login}
//             onChange={(e) => setLogin(e.target.value)}
//           />
//         </div>
//         <div className="login-page-input-container">
//           <label className="login-page-label">Password *</label>
//           <input
//             className="login-page-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="login-page-checkbox-container">
//           <Checkbox className="login-page-checkbox" />
//           <label className="login-page-label">Remember me</label>
//         </div>
//         <button
//           className="login-page-button"
//           onClick={() => submitLoginDetails()}
//         >
//           Login
//         </button>
//         <p className="login-page-text1 login-page-text">Lost your Password?</p>
//       </div>
//       <div className="login-page-container1">
//         <h4 className="login-page-heading">Register</h4>
//         <div className="login-page-input-container">
//           <label className="login-page-label">Email *</label>
//           <input className="login-page-input" />
//         </div>
//         <p className="login-page-text">
//           A link to set a new password will be sent to your email address.
//         </p>
//         <p className="login-page-text">
//           Your personal data will be used to support your experience throughout
//           this website, to manage access to your account, and for other purposes
//           described in our privacy policy.
//         </p>
//         <buton className="login-page-button">Register</buton>
//       </div>
//     </div>
//   );
// };
// export default Login;

import { Checkbox } from "@material-ui/core";
import "./index.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const userId = Cookies.get("userid");
    if (userId) {
      navigate("/");
    }
  }, []);

  const submitLoginDetails = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation
    if (!login || !password) {
      setError("Username and password are required.");
      return;
    }

    // If validation passes, continue with form submission
    try {
      const loginData = {
        email_or_mobile: login,
        password: password,
      };

      const loginFormData = new FormData();

      Object.entries(loginData).forEach(([key, value]) => {
        loginFormData.append(key, value);
      });

      const response = await fetch(`${baseUrl}login`, {
        method: "POST",
        body: loginFormData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.status == true) {
        Cookies.set("userid", data.user_id);

        setLogin("");
        setPassword("");
        navigate("/");
      } else {
        alert("Please enter valid credentials");
      }
    } catch (error) {
      console.error("Error submitting login details:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page-main-container">
      <form className="login-page-container1" onSubmit={submitLoginDetails}>
        <h4 className="login-page-heading">Login</h4>
        <div className="login-page-input-container">
          <label className="login-page-label">
            Username or email address *
          </label>
          <input
            className="login-page-input"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div className="login-page-input-container">
          <label className="login-page-label">Password *</label>
          <input
            type="password"
            className="login-page-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-page-checkbox-container">
          <Checkbox className="login-page-checkbox" />
          <label className="login-page-label">Remember me</label>
        </div>
        <button className="login-page-button" type="submit">
          Login
        </button>
        <div>
          {" "}
          <p className="login-page-text1 login-page-text">
            Lost your Password?
          </p>
          <p
            className="login-page-dont-have-an-account"
            onClick={() => navigate("/register")}
          >
            Don't have an account?
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
