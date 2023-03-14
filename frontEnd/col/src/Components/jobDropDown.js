import React, { useState } from "react";

function JobSelect({ onJobSelected }) {
  const [selectedJob, setSelectedJob] = useState("");

  const handleChange = (event) => {
    setSelectedJob(event.target.value);
    onJobSelected(event.target.value);
  };

  return (
    <form>
      Choose a job to find out how many beers you can afford a year!
      <select value={selectedJob} onChange={handleChange}>
        <option value="" disabled>
          ---Please choose a job---
        </option>
        <option value="Software Developers">Software Engineer</option>
        <option value="Janitors and Cleaners, Except Maids and Housekeeping Cleaners">
          Janitor
        </option>
        <option value="Career/Technical Education Teachers, Postsecondary">
          Teacher
        </option>
        <option value="Physician Assistant">Physician's Assistant</option>
        <option value="Nurse Practitioner">Nurse Practitioner</option>
        <option value="Cashiers">Cashier</option>
        <option value="Construction Laborers">Construction Laborers</option>
        <option value="Server">Server</option>
      </select>
    </form>
  );
}

export default JobSelect;
