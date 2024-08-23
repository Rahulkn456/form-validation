import React, { useState } from "react";
const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prevent the default form submission behavior

    console.log("Name:", name);
    console.log("Email:", email);
  };
  return (
    <div>
      <h1>Contact Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content;
