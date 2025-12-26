import React from 'react'

const Comparison = () => {
  return (
   <section className="comparison-section">
      <div className="container">
        <h2 className="section-title text-center">
          Every LinkedIn Prospector Faces These Challenges
        </h2>

        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <article className="comparison-card">
              <h3>Without LeadCRM</h3>
              <ul>
                <li>Manual lead entry</li>
                <li>Incomplete contact data</li>
                <li>Lost follow-ups</li>
                <li>Low productivity</li>
              </ul>
            </article>
          </div>

          <div className="col-md-6">
            <article className="comparison-card">
              <h3>With LeadCRM</h3>
              <ul>
                <li>Automatic CRM sync</li>
                <li>Enriched lead profiles</li>
                <li>Centralized data</li>
                <li>Higher conversions</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comparison