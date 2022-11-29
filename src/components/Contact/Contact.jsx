import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };
  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <label for="Name">Name</label>
        <input type="text" name="name" />
        <label for="Email">Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit>">Send</button>
      </form>
    </div>
  );
};

export default Contact;
