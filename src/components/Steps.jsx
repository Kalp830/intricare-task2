import React from 'react'

const Steps = () => {
  return (
    <section className="steps-section">
      <div className="container">
        <h2 className="section-title text-center">How It Works</h2>

        <div className="row text-center mt-5">
          {[
            'Install Extension',
            'Browse LinkedIn',
            'Get Enriched Data',
            'Sync to CRM',
          ].map((title, index) => (
            <div className="col-md-3 col-6" key={index}>
              <div className="step-card">
                <span className="step-number">{index + 1}</span>
                <h4>{title}</h4>
                <p>Step description goes here</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps