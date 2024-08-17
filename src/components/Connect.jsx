import React from "react";

export const Connect = () => {
  return (
    <div className="connect-container">
      <form className="connect">
        <h1 className="title">Connect me</h1>
        <div className="field">
          <input type="text" placeholder="Name" />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="phone" maxLength={10} placeholder="Phone" />
        </div>
        <div className="field">
          <textarea type="text" placeholder="Your message" required />
        </div>
        <button className="submit">Submit &#8594;</button>
      </form>
    </div>
  );
};
