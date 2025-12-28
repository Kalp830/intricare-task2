
import React from 'react';
import{Container, Row, Col, Button, Image} from 'react-bootstrap'
import { ArrowRepeat, Cpu, Database, Layers, X } from 'react-bootstrap-icons';
import { WithoutLCM, WithLCM, CtaImg } from '../assets';

const Comparison = () => {
  return (
    <>
  <Container>
    <h1 className="section-title">
      Every LinkedIn Prospector faces these daily challenges
    </h1>
    
    <Row className="align-items-stretch offset-1">
      {/* Without LeadCRM Column */}
      <Col lg={5} className="mb-4">
            <div className="comparison-card">
            <div className="screenshot-container mb-4">
                  <img 
                    src={WithoutLCM}
                    alt="LinkedIn Sales Navigator without LeadCRM"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
          <h2 className="card-header-custom without-crm">
            Without LeadCRM
          </h2>
          
          <div className="feature-item">
            <div className="feature-icon icon-red">
              <X size={24} />
            </div>
            <div className="feature-content">
              <h5>
                Manual Data Entry
                <span className="warning-badge badge-red">3+ Hours wasted daily</span>
              </h5>
              <p>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-red">
              <X size={24} />
            </div>
            <div className="feature-content">
              <h5>
                Incomplete Data
                <span className="warning-badge badge-red">60% Data Incomplete</span>
              </h5>
              <p>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-red">
              <X size={24} />
            </div>
            <div className="feature-content">
              <h5>
                No CRM Visibility
                <span className="warning-badge badge-red">Zero context available</span>
              </h5>
              <p>Can't see existing CRM contacts when browsing LinkedIn profiles</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-red">
              <X size={24} />
            </div>
            <div className="feature-content">
              <h5>
                Limited Productivity
                <span className="warning-badge badge-red">No smart assistance</span>
              </h5>
              <p>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
            </div>
          </div>
        </div>
      </Col>
      
      {/* VS Divider */}
      <Col lg={1} className="d-flex align-items-center justify-content-center">
            <div class="vs-divider">
               <span class="vs-text">VS</span>
            </div>

      </Col>
      
      {/* With LeadCRM Column */}
      <Col lg={5} className="mb-4">
            <div className="comparison-card">
            <div className="screenshot-container mb-4">
                  <img 
                    src={WithLCM} 
                    alt="CRM Sync options with LeadCRM"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
          <h2 className="card-header-custom with-crm">
            With LeadCRM
            <span className="time-badge time-saved">4+ Hours/day Saved</span>
          </h2>
          
          <div className="feature-item">
            <div className="feature-icon icon-blue">
              <ArrowRepeat size={24} />
            </div>
            <div className="feature-content">
              <h5>Complete Bi-Directional Sync</h5>
              <p>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-purple">
              <Database size={24} />
            </div>
            <div className="feature-content">
              <h5>700M+ Contacts + Enrichment</h5>
              <p>Get verified emails and phone numbers from a vast global database.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-orange">
              <Layers size={24} />
            </div>
            <div className="feature-content">
              <h5>CRM Overlay on LinkedIn</h5>
              <p>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon icon-green">
              <Cpu size={24} />
            </div>
            <div className="feature-content">
              <h5>AI Response + Templates + Bulk Exports</h5>
              <p>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    
    {/* CTA Section */}
        <div className="cta-section">
          <Row>
            <Col lg={12} className="cta-wrapper">
              <Button className="cta-button">Start Using LeadCRM Now</Button>
              <Image 
              src={CtaImg}
              alt="savehours"
              fluid
              style={{ width: "19%", height: "auto" }}

             />
            </Col>

          </Row>
    </div>
  </Container>
      
      </>
  )
}

export default Comparison