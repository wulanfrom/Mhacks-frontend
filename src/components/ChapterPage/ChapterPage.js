import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Badge,
  Button,
  Modal,
  Row,
  Col
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./ChapterPage.css";
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor";
import { BiQuestionMark } from "react-icons/bi";
import TutorList from "../TutorList/TutorList";
import "../../styles.css";

export default function ChapterPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var urlPath = window.location.pathname.split("/");
  const prevPage = window.location.origin + "/material/" + urlPath[2];
  const history = useHistory();
  // console.log("urlPath: ", urlPath);

  const goBack = () => {
    history.push("/material/" + urlPath[2]);
  };

  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="navigation">
          <Container>
            <Navbar.Brand href="#home">
              <span className="navText">Node-tion</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                {/* <Nav.Link href="/"> */}
                <Link to="/">Dashboard</Link>
                {/* </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Container className="pt-3 pb-3">
        <div className="contents">
          <Row>
            <Col>
              {/* <Link to={(location) => prevPage} className="backChapter">
                  Back to Node Map
                </Link> */}
              <Button
                variant="link"
                className="p-0 mb-3 backChapter"
                onClick={goBack}
              >
                Back to Node Map
              </Button>
              {/* change the Chapter number accordingly */}
              <h4 className="titles"> Chapter 1 </h4>
              {/* <p className="underline"> Your Notes </p> */}
              <div id="keyword-container">
                <Badge pill className="keyword">
                  Keyword 1
                </Badge>
                <Badge pill className="keyword m-1 ">
                  Keyword 2
                </Badge>
              </div>
            </Col>
            <Col className="rightAlign">
              <Button className="buttons generate" onClick={handleShow}>
                <BiQuestionMark className="questionMark" /> Ask a Tutor
              </Button>
              <div className="cardBody">
                <Modal show={show} onHide={handleClose} className="cardBody">
                  <Modal.Header className="tutorList">
                    <Modal.Title className="titles">Ask a Tutor</Modal.Title>
                    <span
                      className="acrdTitle rightAlign cursorMouse"
                      onClick={handleClose}
                    >
                      {" "}
                      X{" "}
                    </span>
                  </Modal.Header>
                  <Modal.Body>
                    <span> Confused with something? Talk to a tutor! </span>
                    <TutorList />
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
          </Row>

          <h5 className="titles markdownNotes"> Your Notes </h5>
          <div className="ai-summary p-3 mb-3 cardBody">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <br />
          <h5 className="titles markdownNotes"> Add More Notes </h5>
          <div className="">
            <MarkdownEditor />
          </div>

          <br />
          <div className="rightAlign">
            <Button className="buttons generate">Save Notes</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
