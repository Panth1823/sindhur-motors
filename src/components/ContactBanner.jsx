import React, { useState } from "react";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-banner">
      {/* Background Glows */}
      <div className="contact-glow-wrapper" aria-hidden="true">
        <div className="contact-glow-2" />
        <svg
          className="contact-glow-1"
          xmlns="http://www.w3.org/2000/svg"
          width="647"
          height="647"
          viewBox="0 0 647 647"
          fill="none"
        >
          <g opacity="0.7" filter="url(#filter0_f_206_632)">
            <circle cx="323.5" cy="323.5" r="123.5" fill="#2D449C" />
          </g>
          <defs>
            <filter
              id="filter0_f_206_632"
              x="0"
              y="0"
              width="647"
              height="647"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_206_632"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">
            Ready for the <span className="highlight-blue">Next Ride?</span>
            <br />
            We'll Let you Know When we Launch.
          </h1>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full name*</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Kevin Flynn"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID*</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number*</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="123-456-789"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Talk to us</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                rows="4"
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              {submitted ? "Request Submitted" : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
