// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./logo-register.png";
// import "./MoneyGuard.css";
// import "./register.css";

// function MoneyGuard() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     let formErrors = {};

//     if (isRegistering && !/^[a-zA-Z]+$/.test(formData.username)) {
//       formErrors.username = "Username must contain only letters";
//     }

//     if (formData.password.length < 5) {
//       formErrors.password = "Password must be at least 5 characters";
//     }

//     if (isRegistering && formData.password !== formData.confirmPassword) {
//       formErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(formErrors);

//     return Object.keys(formErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       navigate("/statistics");
//     }
//   };

//   return (
//     <div className="overlay">
//       <div className="modal">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo" />
//         </div>

//         <h1 className="title">Money Guard</h1>
//         <form onSubmit={handleSubmit} className="form">
//           {isRegistering && (
//             <div>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Name"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="inputName input"
//               />
//               {errors.username && <p className="error">{errors.username}</p>}
//             </div>
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             value={formData.email}
//             onChange={handleChange}
//             className="inputName input"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="input"
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           {isRegistering && (
//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="input"
//               />
//               {errors.confirmPassword && (
//                 <p className="error">{errors.confirmPassword}</p>
//               )}
//             </div>
//           )}
//           <button type="submit" className="button">
//             {isRegistering ? "REGISTER" : "LOG IN"}
//           </button>
//         </form>
//         <button
//           onClick={() => {
//             setIsRegistering(!isRegistering);
//             setErrors({});
//             setFormData({
//               username: "",
//               email: "",
//               password: "",
//               confirmPassword: "",
//             });
//           }}
//           className="toggleButton"
//         >
//           {isRegistering
//             ? "Already have an account? Log in"
//             : "Don't have an account? Register"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default MoneyGuard;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo-register.png";
import "./MoneyGuard.css";
import "./register.css";

function MoneyGuard() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [emailUsername, setEmailUsername] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      const usernamePart = value.split("@")[0];
      setEmailUsername(usernamePart);
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (isRegistering && !/^[a-zA-Z]+$/.test(formData.username)) {
      formErrors.username = "Username must contain only letters";
    }

    if (formData.password.length < 5) {
      formErrors.password = "Password must be at least 5 characters";
    }

    if (isRegistering && formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/statistics");
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <h1 className="title">Money Guard</h1>
        <form onSubmit={handleSubmit} className="form">
          {isRegistering && (
            <div>
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                className="inputName input"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="inputName input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {isRegistering && (
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <button type="submit" className="button">
            {isRegistering ? "REGISTER" : "LOG IN"}
          </button>
        </form>
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
            setErrors({});
            setFormData({
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            setEmailUsername("");
          }}
          className="toggleButton"
        >
          {isRegistering
            ? "Already have an account? Log in"
            : "Don't have an account? Register"}
        </button>

        {emailUsername && (
          <div className="emailUsernameDisplay">
            <span>{emailUsername}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoneyGuard;
