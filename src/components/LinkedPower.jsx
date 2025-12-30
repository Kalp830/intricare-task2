import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CtaButton from './CtaButton';
import { ArrowRightShort } from 'react-bootstrap-icons';
import {LinkedSupportImg} from '../assets'

const LinkedPower = () => {
  return (
    <section className='linked-powerhouse'>
          <Container>
              <Row>
                  <Col size={12}>
                  <h2 className='linked-powerhouse-title pb-4'>Join Thousands of Professionals Using LeadCRM</h2>
                  <img className='img-fluid w-100' src={LinkedSupportImg} alt="Linkedin image banner"/>
                <div className='cta-wrapper mt-5'>
                  <CtaButton
                  text="Get Started Today"
                  icon={<ArrowRightShort size={30} />}
                      /> 
                      </div>
                      </Col>
          
              </Row>
         </Container>
    </section>
  )
}

export default LinkedPower
