import React, { Fragment, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import APP_PATHS from "../app-paths";
import apiClient from "../service/api-client";

function CreateProcess() {
  const [queryParams] = useSearchParams();

  const slugValue = queryParams.get("slug");

  const [form, setForm] = useState({
    name: "",
    url: "",
    notes: "",
    salary: "",
    isRemote: true,
    location: "voila",
  });
  console.log("form:", form);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setForm({ ...form, [name]: value });
  }

  function handleCheckbox(evt) {
    const { name, checked } = evt.target;
    if (checked) {
      setForm({ ...form, location: "", [name]: checked });
      return;
    }

    setForm({ ...form, [name]: checked });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    apiClient
      .post("/process/new", { ...form, goalSlug: slugValue })
      .then(console.log)
      .catch(console.error);
  }

  if (!slugValue) {
    return <Navigate to={APP_PATHS.GOALS_CREATE} />;
  }

  return (
    <div>
      <h1>create-process</h1>

      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </label>
        <br />
        <label>
          isRemote
          <input
            type="checkbox"
            name="isRemote"
            onChange={handleCheckbox}
            checked={form.isRemote}
          />
        </label>
        <br />
        {!form.isRemote && (
          <>
            <label>
              location
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </label>
            <br />
          </>
        )}
        <label>
          url
          <input
            type="text"
            name="url"
            onChange={handleChange}
            value={form.url}
          />
        </label>
        <br />

        <label>
          salary
          <input
            type="text"
            name="salary"
            onChange={handleChange}
            value={form.salary}
          />
        </label>

        <br />
        <label>
          notes
          <textarea
            type="text"
            name="notes"
            onChange={handleChange}
            value={form.notes}
          />
        </label>
        <br />

        <button type="submit">Create a process</button>
      </form>
    </div>
  );
}

export default CreateProcess;
