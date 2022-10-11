import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import APP_PATHS from "../app-paths";
import { useUser } from "../context/user.context";

// const handleUsernameChange = (e) => setUsername(e.target.value);
// const handleEmailChange = (e) => setEmail(e.target.value);
// const handlePasswordChange = (e) => setPassword(e.target.value);
// const handleNameChange = (e) => setName(e.target.value);

function Login() {
  const { authenticate } = useUser();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Tried submitting the form");
    // fetch("http://localhost:5005/auth/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // })
    //   .then((r) => r.json())
    //   .then(console.log);
    axios
      .post("http://localhost:5005/auth/login", form)
      .then((result) => {
        console.log("user:", result);
        authenticate(result.data);
        navigate(APP_PATHS.PROFILE);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }

  function handleChange(e) {
    // console.log("input being worked on -> ", e.target.name);
    // console.log("value added to input -> ", e.target.value);
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  // if (user) {
  //   return <Navigate to={APP_PATHS.PROFILE} replace />;
  // }

  return (
    <div>
      LogIn
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={form.username}
          />
        </label>
        <br />

        <label>
          Password
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
          />
        </label>
        <br />

        <button type="submit">Login to your account</button>
      </form>
    </div>
  );
}

export default Login;
