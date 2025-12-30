import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Step1Img, Step2Img, Step3Img, Step4Img } from '../assets';
import { ArrowRightShort } from 'react-bootstrap-icons';
import CtaButton from './CtaButton';

const Steps = () => {
  const stepsContent = [
    { img:Step1Img, title: 'Install the Extension', Description: 'Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.' },
    { img:Step2Img, title: 'Browse LinkedIn', Description: 'Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.' },
    { img:Step3Img, title: 'Get Enriched Data', Description: 'Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.' },
    { img:Step4Img, title: 'Sync to CRM Instantly', Description:'Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.    '}
  ]
  return (
    <section className="steps-section steps-row">
      <Container>
        <h2 className="section-title d-flex justify-content-start">How It Works</h2>
        <p>From setup to success in <span style={{fontWeight:"bold"}}>4 simple steps</span></p>

        <div className="row text-center mt-5 ">
          {stepsContent.map((curEle, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="step-card">
                <span className="step-number">{index + 1}</span>
                <h4>{curEle.title}</h4>
                <p>{curEle.Description}</p>
                <img src={curEle.img} alt={curEle.title} loading='lazy' />
              </div>
            </div>
          ))}
          <div className="cta-section">
          <Row>
              <Col lg={12} className="cta-wrapper">
                <CtaButton
                  text="Try LeadCRM Now"
                  icon={<ArrowRightShort size={30} /> }
                 /> 
            </Col>
          </Row>
    </div>
        </div>
      </Container>
    </section>
  )
}

export default Steps