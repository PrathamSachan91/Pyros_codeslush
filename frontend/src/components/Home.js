import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import blood_donation from '../components/assets/blood_donating.png';

const Home = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/BecomeDonor');
  };

  const handleDonorsearchClick=()=>{
    navigate('/FindDonor')
  }
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Donate blood, save life!</h1>
          <p>Your blood donation is a precious gift that can help save lives and bring hope to those in critical need. Every drop counts, 
            and your contribution can make a significant difference in someone's life. Whether it's for emergency surgeries, 
            chronic illnesses, or accident victims, your generosity can give others a second chance at life. Join our community of heroes today and help us create a healthier, happier world.</p>
          <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
        </div>
        <div className='border-colour'>
          <div className="hero-image">
            <img src={blood_donation} alt="Blood Donation" />
          </div>
        </div>
      </section>
      <section className="helping-section">
        <div className="helping-content">
          <h2>We are helping people for last 10 years</h2>
          <p>For over a decade, we have been dedicated to saving lives and supporting communities through our blood donation drives. Our efforts have connected thousands of generous donors with patients in need.
            With a committed team and a compassionate approach, 
            we continue to make a profound impact, one donation at a time. Join us in our mission to give the gift of life and ensure a healthier future for all.</p>
          <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
        </div>
      </section>
      <section className="process-section">
        <h2>Donation process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Registration</h3>
            <p>Complete a simple form to register as a donor. Your information helps us match you with those in need.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Screening</h3>
            <p>Undergo a quick health screening to ensure you are eligible to donate blood safely.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Donation</h3>
            <p>Donate blood in a comfortable and secure environment. The process is quick and easy, and you'll be guided by our professional staff.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Refreshment</h3>
            <p>Enjoy light refreshments and relax for a few minutes after donating. Thank you for making a difference!</p>
          </div>
        </div>
      </section>
      <section className='process-section'>
        <h2>Donor Searching Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Submit Request</h3>
            <p>Fill out a request form with the necessary details such as blood type, urgency, and location. This information will help us find the right donor for you.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Verification</h3>
            <p>Our team will review your request and verify the details to ensure we have all the required information to proceed efficiently.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Donor Matching</h3>
            <p>We will search our database to find a matching donor based on the blood type and location provided. Once a match is found, we will contact the donor.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Coordination</h3>
            <p>We will coordinate with both you and the donor to arrange a convenient time and place for the donation. We ensure the process is smooth and stress-free for both parties.</p>
          </div>
        </div>
        <button className="donate-button" onClick={handleDonorsearchClick}>Search Donor</button>
      </section>
    </div>
  );
};

export default Home;
