import React from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "David Fincher",
      company: "On Capterra",
    },
    {
      id: 2,
      text: "Amazing tool for lead generation! The CRM integration works flawlessly and has saved our team countless hours. The data enrichment feature is a game-changer.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Sarah Johnson",
      company: "VP of Sales at TechCorp",
    },
    {
      id: 3,
      text: "The best LinkedIn prospecting tool we've used. The automated sync with HubSpot is seamless and the contact data quality is exceptional. Highly recommend!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Michael Chen",
      company: "Head of Growth at StartupXYZ",
    },
    {
      id: 4,
      text: "LeadCRM has transformed our outreach process. The AI-powered features and bulk export capabilities have increased our productivity by 10x. Worth every penny!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=4",
      name: "Emily Rodriguez",
      company: "Sales Director at CloudSoft",
    },
    {
      id: 5,
      text: "Incredible value for the price. The custom field mapping and waterfall enrichment features are exactly what we needed. Customer support is top-notch!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5",
      name: "James Wilson",
      company: "Founder at GrowthHub",
    },
    {
      id: 6,
      text: "We've tried several LinkedIn tools, but LeadCRM stands out. The bi-directional sync works perfectly, and the interface is intuitive. A must-have for any sales team.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=6",
      name: "Lisa Anderson",
      company: "Sales Manager at B2B Solutions",
    },
  ];

  return (
    <> 
    
     <div className="testimonial-section">
        <div className="testimonial-header">
          <h2 className="testimonial-title">What people are saying about LeadCRM</h2>
        </div>
        
        <div className="testimonial-scroll-container">
          <div className="testimonial-scroll-wrapper">
            {/* First set of testimonials */}
            <div className="testimonial-track">
              {testimonials.map((testimonial) => (
                <div key={`testimonial-1-${testimonial.id}`} className="testimonial-card">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="testimonial-rating">
                          <div className="capterra-badge">C</div>
                          
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                  </div>
                  
                  <div className="testimonial-divider"></div>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="testimonial-track">
              {testimonials.map((testimonial) => (
                <div key={`testimonial-2-${testimonial.id}`} className="testimonial-card">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="testimonial-rating">
                    <div className="capterra-badge">C</div>
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                    <StarFill className="rating-icon" fill="currentColor" />
                  </div>
                  
                  <div className="testimonial-divider"></div>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Testimonials;