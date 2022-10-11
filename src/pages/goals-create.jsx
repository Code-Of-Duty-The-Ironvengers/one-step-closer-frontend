import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../service/api-client";

// {
//   title: string
//   deadline: Date
//   description: string
// }

function GoalsCreate() {
  const [form, setForm] = useState({
    title: "",
    deadline: new Date(),
    description: "",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ form });

    apiClient
      .post("/dashboard/create-goal", form)
      .then(({ data }) => {
        console.log("data:", data);
        navigate(`/goal/${data.slug}`);
      })
      .catch((err) => {
        if (err?.response?.data.code === 1) {
          // navigate
          return navigate(`/goal/${err.response.data.slug}`);
        }
        console.log("err:", err);
      });

    // req.body.form.title
    // req.body.title
    // req.body.deadline
    // req.body.description
  }

  return (
    <div>
      <h1>GoalsCreate</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </label>
        <br />
        <label>
          Deadline
          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            value={form.deadline}
          />
        </label>
        <br />

        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
        </label>
        <br />

        <button type="submit">Create a goal</button>
      </form>
    </div>
  );
}

export default GoalsCreate;
