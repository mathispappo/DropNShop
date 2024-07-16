import React, { useEffect, useState } from 'react';
import '../../css/ContactPage.css';
import Mathis from '../../assets/team/mathis.png';
import Martin from '../../assets/team/martin.png';
import Elliot from '../../assets/team/elliot.png';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in touch with us</h1>
        <h1>for more information</h1>
      </div>
      <p>If you need help or have a question, we’re here for you</p>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-icon" style={{ backgroundColor: '#ffeedb' }}>
            <img src={Mathis} alt="Mathis PAPPO" />
          </div>
          <h3>Mathis PAPPO</h3>
          <p>mathis.pappo@efrei.net</p>
          <p>+33 6 38 22 49 10</p>
          <button>Contact Me</button>
        </div>
        <div className="contact-card">
          <div className="card-icon" style={{ backgroundColor: '#f3e7fd' }}>
            <img src={Martin} alt="Martin VIALLE" />
          </div>
          <h3>Martin VIALLE</h3>
          <p>martin.vialle@efrei.net</p>
          <p>+33 6 21 53 92 40</p>
          <button>Contact Me</button>
        </div>
        <div className="contact-card">
          <div className="card-icon" style={{ backgroundColor: '#d4f0fc' }}>
            <img src={Elliot} alt="Elliot MAISL" />
          </div>
          <h3>Elliot MAISL</h3>
          <p>elliot.maisl@efrei.net</p>
          <p>+33 6 82 19 77 39</p>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
