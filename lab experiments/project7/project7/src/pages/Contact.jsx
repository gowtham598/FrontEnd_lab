import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.message.length < 10)
      newErrors.message = "Minimum 10 characters required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("🎉 Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>📬 Contact Us</h2>

      <div className="contact-wrapper">
        
        <div className="contact-info">
          <h3>📍 Our Office</h3>
          <p>Hyderabad, India</p>
          <br />
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
          <br />
          <h3>📧 Email</h3>
          <p>support@colorstore.com</p>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;