import React from 'react';
import{Button} from 'react-bootstrap'


const CtaButton = ({text, icon}) => {
  return (
      <>
      <Button className="cta-button">
       <span> {text} </span>
        {icon}
      </Button>
    
    </>
  )
}

export default CtaButton;
