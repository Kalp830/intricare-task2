import React from 'react';
import{BottomImg, CromeIcon, RocketIco, TagImg} from '../assets'
import CtaButton from './CtaButton';
import RatingDemo from './RatingDemo';
import {Row, Col} from 'react-bootstrap'

const Hero = () => {
  return (
   <section className="hero-section text-center">
      <div className="container">
        <div className='small-title'><img src={RocketIco} /> <span className='pl-2'>Thousands of Professional using LeadCRM</span></div>
        <h1>
          LinkedIn CRM Integration <br />
          Capture, Sync and Enrich in<span> Both Ways <img src={BottomImg} alt="yellow img" /></span>
        </h1>

        <p className="hero-description">
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles.
          Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
        </p>
        <div className='image-box pb-5'>
          <img className='img-fluid' src={TagImg} alt="tag-img" />
          <RatingDemo/>
        </div>

        <div className="hero-actions">
          <Row className='offset-3'>
         
            <Col lg={4}>
        <div className="chrome-badge d-flex align-items-center justify-content-between w-100">
                  <div className="d-flex flex-column">
                  <span>Available in</span>
                    <strong>Chrome Web Store</strong>
                  </div>
                  <img src={CromeIcon} alt="Chrome" className="ms-2" width="40" height="40" />
            </div>
            </Col>
            <Col lg={4} className="d-flex justify-content-start">
            <CtaButton text="Get a Free Trial Now!"/>
            </Col>
            
            </Row>
          
        </div>
      </div>
    </section>
  )
}

export default Hero