import React from "react";

function CompanyForm({ company, handleCompanyChange }) {
  return (
    <div>
      <label>
        Company Name
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleCompanyChange}
        />
      </label>
      <br />
      <div>
        How much do I want to work here
        <br />
        <label>
          It doesnt feel like the greatest of fits
          <input
            type="radio"
            name="desireability"
            value="Hell Nah"
            onChange={handleCompanyChange}
          />
        </label>
        <label>
          Might be interesting
          <input
            type="radio"
            name="desireability"
            value="We're all in this together. Long live High School Musical <3 <3 <3"
            onChange={handleCompanyChange}
          />
        </label>
        <label>
          It would be a great honour to serve you
          <input
            type="radio"
            name="desireability"
            value="Please Say Yeh"
            onChange={handleCompanyChange}
          />
        </label>
      </div>
      <br />
      <label>
        Website
        <input
          type="text"
          name="website"
          value={company.website}
          onChange={handleCompanyChange}
        />
      </label>
      <br />
    </div>
  );
}

export default CompanyForm;
