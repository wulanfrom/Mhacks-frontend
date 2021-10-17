import React from "react";
import { Container, ProgressBar, Card } from "react-bootstrap";
import "./ChapterProgress.css";

export default function ChapterProgress() {
  const now = 60;

  return (
    <Container className="progBody">
      <Card>
        <Card.Body className="p-3 cardBody">
          <p className="text-center">Learning Progress</p>
          <ProgressBar
            className="progress-bar"
            isChild={true}
            now={now}
            label={`${now}%`}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
