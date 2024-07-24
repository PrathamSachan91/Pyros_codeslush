import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="ContactUs">
      <h1>Contact Us</h1>
      <p>If you have any questions, suggestions, or would like to learn more about how you can help, please feel free to contact us. We are here to assist you!</p>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Address: </strong>Flat No. 212 Block No. 457 Maliba Complex , Kamrej Chaar Raasta , Surat 394185</p>
        <p><strong>Phone:</strong> +91 9532879546</p>
        <p><strong>Email:</strong> donordua123@gmail.com</p>
      </div>

      <div className="contact-form">
        <h2>Send us your Query</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
