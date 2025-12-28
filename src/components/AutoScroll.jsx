import React from 'react';
import { HandIco, MappingIco, UserIco, WaterfallIco } from '../assets';

const AutoScroll = () => {
  const features = [
    {
      icon: <img src={UserIco} style={{ width: '50px', height:'50px'}} />,
      text: 'Access to',
      highlight: '700M+ Contacts',
    },
    {
      icon: <img src={HandIco} style={{ width: '35px', height:'35px'}}/>,
      text: 'One click push ',
      highlight: 'to CRM'
    },
    {
      icon: <img src={MappingIco} />,
      text: 'Custom Field',
      highlight: 'Mapping',
    },
    {
      icon: <img src={WaterfallIco} /> ,
      text: 'Advanced',
      highlight: 'Waterfall Enrichment',
    },
  ];

  return (
    <> 
      <div className="auto-scroll-container">
        <div className="auto-scroll-wrapper">
          {/* First set of features */}
          <div className="features-track">
            {features.map((feature, index) => (
              <div key={`feature-1-${index}`} className="feature-item-scroll">
                <div 
                  className="feature-icon-wrapper" 
                >
                  {feature.icon}
                </div>
                <div className="feature-text">
                  {feature.text}
                  <span className="feature-highlight">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="features-track">
            {features.map((feature, index) => (
              <div key={`feature-2-${index}`} className="feature-item-scroll">
                <div 
                  className="feature-icon-wrapper" 
                >
                  {feature.icon}
                </div>
                <div className="feature-text">
                  {feature.text}
                  <span className="feature-highlight">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr style={{borderColor:'#ccc'}}/>
    </>
  );
};

export default AutoScroll;