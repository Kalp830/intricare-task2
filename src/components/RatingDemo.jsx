import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Rating from './Rating';

const RatingDemo = () => {
  return (
    <section className="rating-demo-section">
      <Container>
       

        <Row className="justify-content-center mt-3 g-4">
          <Col xs="auto">
            <Rating platform="chrome" rating={5} maxRating={5} />
          </Col>
          <Col xs="auto">
            <Rating platform="playstore" rating={5} maxRating={5} />
          </Col>
        </Row>


      </Container>
    </section>
  );
};

export default RatingDemo;