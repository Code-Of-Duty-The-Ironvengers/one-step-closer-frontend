import React, { useState } from "react";
import { useUser } from "../context/user.context";
import apiClient from "../service/api-client";
import { useNavigate } from "react-router-dom";
import APP_PATHS from "../app-paths";

function ProfileEdit() {
  const { user, authenticate } = useUser();
  const [userData, setUserData] = useState(user);
  const navigateWithLittleN = useNavigate();

  function handleChange(event) {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    apiClient
      .post("/profile/edit", userData)
      .then((result) => {
        console.log("Data is received");
        authenticate(result.data);
        navigateWithLittleN(APP_PATHS.PROFILE);
        // define the logic for the then
      })
      .catch((err) => {
        console.error(err.message);
        // define what we do if there's an eror
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userData.username}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </label>

        <button type="submit">Edit </button>
      </form>
    </div>
  );
}

export default ProfileEdit;
