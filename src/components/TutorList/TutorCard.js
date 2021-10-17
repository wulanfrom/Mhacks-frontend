import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function TutorCard() {
  return (
    <div>
      <Card>
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Body>
          <Row>
            <Col>
              <Card.Img src="../../images/volunteer.png" alt="volunteer" />
            </Col>
            <Col>
              <Card.Text>
                <p>Esther Howard</p>
                <p>Volunteer</p>
              </Card.Text>
            </Col>
            <Col>
              <Button className="buttons">Schedule</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
