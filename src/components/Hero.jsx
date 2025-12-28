import React from 'react';
import{RocketIco} from '../assets'

const Hero = () => {
  return (
   <section className="hero-section text-center">
      <div className="container">
        <div className='small-title'><img className='mr-2' src={RocketIco} />Thousands of Professional using LeadCRM</div>
        <h1>
          LinkedIn CRM Integration <br />
          <span>Capture, Sync and Enrich in Both Ways</span>
        </h1>

        <p className="hero-description">
          Automate lead capture from LinkedIn to your CRM with real-time syncing
          and enriched contact data.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Start Free Trial</a>
          <a href="#" className="btn btn-outline-primary">Watch Demo</a>
        </div>
      </div>
    </section>
  )
}

export default Hero