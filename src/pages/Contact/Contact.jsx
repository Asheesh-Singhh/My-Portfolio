import React from "react";
import "./Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "072966e1-c607-4111-94ac-dc0b5e5b11b0");

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
    <div className="Form-container">
      <form action="/submit" method="POST" onSubmit={onSubmit}>
        <div className="Name-Email">
          <div className="name">
            <p>Enter Name</p>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="email">
            <p>Your Email</p>
            <input type="email" name="email" placeholder="Email" required />
          </div>
        </div>
        <p>Your Subject</p>
        <input type="text" name="text" placeholder="Subject" required />
        <p>Your Massage</p>
        <textarea name="massage" id="massage"></textarea>
        <div className="contact-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
