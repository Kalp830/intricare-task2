import React from 'react'
import { Container } from 'react-bootstrap';
import { LeadCrmSuppImg, TalkThumb } from '../assets';
import CtaButton from './CtaButton';

const LeadCrmSupport = () => {
  return (
    <>
          <Container>
              <section className='learcrm-support text-center'>
          <h2 className='testimonial-title'>Our Supported LeadCRM</h2><img className='img-fluid' src={TalkThumb} alt="thumb image" />
                  <p>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!</p>
                  <img className='img-fluid' src={LeadCrmSuppImg} />
                  <CtaButton text="Lets Integrate your CRM Now!"/>
              </section>
          </Container>         
    </>
  )
}

export default LeadCrmSupport
