import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65e61333-e26b-414d-874c-5df340344a7d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" hidden>
            message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="message"
            required
          />
        </div>
        <input className="hover-btn" type="submit" value="submit" />
      </form>
    </section>
  );
};
