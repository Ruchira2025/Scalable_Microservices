import React, { useState } from "react";

function UserTab({ setUser, next }) {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => { setUser(data); next(); })
      .catch(() => alert("User creation failed"));
  };

  return (
    <div>
      <h3>Register User</h3>
      <input name="username" placeholder="Username" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>➡️ Submit</button>
    </div>
  );
}

export default UserTab;

