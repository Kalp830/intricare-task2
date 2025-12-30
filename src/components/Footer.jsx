import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, TwitterX, Linkedin, Instagram} from 'react-bootstrap-icons';
import { CallIco, CromeIcon, FaxIco, QuestionIco, SiteLogo } from '../assets';


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container className="py-5">
        <Row className="g-5">
          {/* Logo and Description */}
          <Col lg={3} md={6}>
            <div className="footer-brand">
              <div className="d-flex align-items-center mb-3">
                <img src={SiteLogo} alt="LeadCRM Logo" className="footer-logo" />
              </div>
              <p className="text-muted">
                LeadCRM is LinkedIn integration tool for your CRM.
              </p>
              <div className="social-icons d-flex gap-3 mt-4">
                <a href="#" className="social-icon facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon twitter">
                  <TwitterX size={20} />
                </a>
                <a href="#" className="social-icon linkedin">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-icon instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </Col>

          {/* Integrations */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading mb-4">Integrations</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">HubSpot</a></li>
              <li><a href="#">Salesforce</a></li>
              <li><a href="#">Pipedrive</a></li>
              <li>
                <a href="#">Close.io</a>
                <span className="badge-coming-soon ms-2">Coming Soon</span>
              </li>
              <li>
                <a href="#">Insightly</a>
                <span className="badge-coming-soon ms-2">Coming Soon</span>
              </li>
            </ul>
          </Col>

          {/* Alternative */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading mb-4">Alternative</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Surfe VS LeadCRM</a></li>
              <li><a href="#">Linkmatch Alternative</a></li>
            </ul>
          </Col>

          {/* Legal */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading mb-4">Legal</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </Col>

          {/* Contact Us */}
          <Col lg={3} md={6}>
            <h5 className="footer-heading mb-4">Contact Us</h5>
            <ul className="footer-contact list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <img src={FaxIco} className='me-3' />
                <a href="mailto:support@leadcrm.io">support@leadcrm.io</a>
              </li>
              <li className="d-flex align-items-center mb-3">
              <img src={CallIco} className='me-3' />
                <a href="tel:+12315387466">+1 231-538-7466</a>
              </li>
              <li className="d-flex align-items-center mb-4">
              <img src={ QuestionIco} className='me-3' />
                <i class="bi bi-question-circle-fill"></i>
                <a href="#">Help Center</a>
              </li>
              <li>
                <div className="chrome-badge d-flex align-items-center">
                  <div className="d-flex flex-column">
                  <span>Available in</span>
                    <strong>Chrome</strong>
                    
                  </div>
                  <img src={CromeIcon} alt="Chrome" className="ms-2" width="40" height="40" />
                </div>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="mt-5 ">
          <Col>
            <p className="disclaimer text-muted small text-center mb-3">
              Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
            </p>
            <p className="copyright text-center text-muted small mb-0 border-top pt-3">
              Copyright © 2025 LeadCRM. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;