import React, { useState } from "react";

export const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Email sent successfully!");
        } else {
          setStatus("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("An error occurred while sending the email.");
      });
  };
  return (
    <div className="connect-container">
      <form className="connect" onSubmit={handleSubmit}>
        <h1 className="title">Connect me</h1>
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <input
            type="phone"
            maxLength={10}
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <textarea
            type="text"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit">Submit &#8594;</button>
        {status && <p className="sending-status">{status}</p>}
      </form>
    </div>
  );
};
