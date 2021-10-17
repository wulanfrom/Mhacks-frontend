import React from "react";
// import TutorCard from "./TutorCard";
import { Card, Row, Col, Button } from "react-bootstrap";

export default function TutorList() {
  return (
    <div>
      <Card className="mt-2 mb-2">
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Body className="cardBody">
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Card.Img src="../../images/volunteer.png" alt="volunteer" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Card.Text>
                <p className="cardTitle">Esther Howard Oxtoby</p>
                <p>Volunteer</p>
              </Card.Text>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button className="buttons genButton">Schedule</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-2 mb-2">
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Body className="cardBody">
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Card.Img src="../../images/volunteer.png" alt="volunteer" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Card.Text>
                <p className="cardTitle">Esther Howard Oxtoby</p>
                <p>Volunteer</p>
              </Card.Text>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button className="buttons genButton">Schedule</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-2 mb-2">
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Body className="cardBody">
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Card.Img src="../../images/volunteer.png" alt="volunteer" />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Card.Text>
                <p className="cardTitle">Esther Howard Oxtoby</p>
                <p>Volunteer</p>
              </Card.Text>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3}>
              <Button className="buttons genButton">Schedule</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
