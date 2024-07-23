import React from 'react'
import bg1 from '../components/assets/about_bg1.png'
import bg2 from '../components/assets/about_bg2.png'
import {Link} from 'react-router-dom'
import './About.css'
const About = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>Donate Blood & Save a Life</h1>
          <p>Giving blood is one of the most selfless acts you can perform. Each donation can help save up to three lives, providing critical support to patients in need of blood transfusions.</p>
          <Link to="/BecomeDonor" className="btn">Donate Now</Link>
          <Link to="/ContactUs" className="btn">Contact Us</Link>
        </div>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h2>About Us</h2>
          <p>At DonorDuo, we are dedicated to making a difference in the lives of patients and their families through the power of blood donation. Our mission is to ensure a reliable and safe blood supply for those in need, and to promote the importance of regular blood donation in our communities.</p>
          <p>Founded in [Year], our organization has grown to become a trusted name in the blood donation community. We work closely with hospitals, clinics, and medical professionals to ensure that every donation is used effectively and efficiently. Our state-of-the-art facilities and rigorous testing procedures ensure that every unit of blood collected is safe and ready for use.</p>
          <p>Our donors are at the heart of everything we do. We strive to provide a positive and rewarding experience for every donor, with comfortable donation centers, friendly staff, and a commitment to safety and care. We believe in the power of community and the impact that a single donation can have on multiple lives.</p>
          <h2>About Blood Donors</h2>
          <p>Blood donors are everyday heroes who contribute to the health and wellbeing of their communities. Each donation provides a vital resource for medical treatments, surgeries, and emergencies. By donating blood, you are directly impacting the lives of patients who need it most.</p>
        </div>
        <div className='border-colour'>
          <div className="hero-image">
            <img src={bg2} alt="Blood Donation" />
          </div>
        </div>
      </section>
      <div className='hero-img'>
        <img src={bg1} alt="Blood Donation" />
      </div>
    </div>
  )
}

export default About
