import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { 
  Database, 
  ArrowRepeat, 
  Download, 
  Cpu,
  CheckCircleFill,
  XCircleFill,
} from 'react-bootstrap-icons';
import { AiIco, BulkData, CrmData, Robot, SycData, TabsImg1, TabsImg2, TabsImg3 } from '../assets';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('enrichment');

  return (
    <section className="tab-section">
      <img src={Robot} alt="Robot" className="robot-img" />
      <Container>
        {/* Header */}
        <div className="section-header text-center mb-5">
          <div className="robot-icon mb-4">
            
          </div>
          <h2 className="section-title">Complete LinkedIn Sales Solutions</h2>
          <p className="section-subtitle">Everything you need for professional LinkedIn prospecting</p>
        </div>

        {/* Tabs */}
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav  className="custom-tabs justify-content-between align-items-center mb-5">
            <Nav.Item>
              <Nav.Link eventKey="enrichment" className="custom-tab">
                <img src={CrmData} alt="crm-data" />
                CRM Data Enrichment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sync" className="custom-tab">
              <img src={SycData} alt="data syc" />
                CRM Data Sync
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="export" className="custom-tab">
               <img src={BulkData} alt="Bulk data" />
                Bulk Export & Enrichment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ai" className="custom-tab">
                <img src={AiIco} alt="Ai data" />
                AI Productivity
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* CRM Data Enrichment Tab */}
            <Tab.Pane eventKey="enrichment">
              <div className="tab-content-wrapper">
                <div className="problem-statement mb-4">
                  <p className="text-muted">
                    It's hard to find the accurate contact data for every prospects by{' '}
                    <span className="badge-incomplete">Incomplete Data</span>
                  </p>
                </div>

                <Row className="g-4">
                  <Col lg={6}>
                    <div className="solution-card">
                      <h5 className="card-title mb-3">
                        Here is how LeadCRM tackles that situation.
                      </h5>
                      <a href="#" className="solution-link">
                        Try LeadCRM Data Enrichment →
                      </a>

                      <div className="enrichment-demo mt-4">
                        <Row>
                          <Col md={6}>
                            <img className='img-fluid' src={TabsImg1} alt="image"/>
                          </Col>
                          <Col md={6}>
                          <img className='img-fluid' src={TabsImg2} alt="image"/>
                          </Col>
                       </Row>

                      
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="solution-card">
                      <h5 className="card-title mb-3">
                        If it does not works for you ! try our{' '}
                        <span>Advanced Waterfall Enrichment →</span>
                      </h5>
                      <img className='img-fluid' src={TabsImg3}  alt="image3"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab.Pane>

            {/* CRM Data Sync Tab */}
            <Tab.Pane eventKey="sync">
              <div className="tab-content-wrapper text-center py-5">
                <ArrowRepeat size={64} className="text-primary mb-3" />
                <h4>CRM Data Sync</h4>
                <p className="text-muted">
                  Automatically sync your LinkedIn data with your CRM in real-time.
                </p>
              </div>
            </Tab.Pane>

            {/* Bulk Export & Enrichment Tab */}
            <Tab.Pane eventKey="export">
              <div className="tab-content-wrapper text-center py-5">
                <Download size={64} className="text-primary mb-3" />
                <h4>Bulk Export & Enrichment</h4>
                <p className="text-muted">
                  Export and enrich large datasets of LinkedIn prospects efficiently.
                </p>
              </div>
            </Tab.Pane>

            {/* AI Productivity Tab */}
            <Tab.Pane eventKey="ai">
              <div className="tab-content-wrapper text-center py-5">
                <Cpu size={64} className="text-primary mb-3" />
                <h4>AI Productivity</h4>
                <p className="text-muted">
                  Leverage AI to automate and enhance your LinkedIn prospecting workflow.
                </p>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default TabSection;