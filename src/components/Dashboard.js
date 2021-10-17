import React, { useState, useEffect } from "react";
import { Navbar, Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageItem from "./PageItem/PageItem";
import Dropzone from "./DropzonePage/DropzonePage";
import "../styles.css";

import axios from "axios";

export default function Dashboard() {
  const [droppedFiles, updateFiles] = useState([]);

  const updateAllFiles = (updatedList) => {
    // console.log(updatedList);
    updateFiles(updatedList);
  };

  const apiUrl = "http://10b4-34-79-206-117.ngrok.io"; // need to be changed after deploying on gcp

  // const handleApi = async (files) => {
  //   const formData = new FormData();
  //   formData.append('pdf', files)
  //   const response = await axios.post(apiUrl, files)
  //   console.log("this is res");
  //   console.log(response);
  //   setData(response.data)
  //   console.log(data);
  //   // return response
  //   return response.data;
  // }

  useEffect(() => {
    console.log("droppedFiles: ", droppedFiles);
  }, [droppedFiles]);

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
              {/* <Nav.Link href="/"> */}
              <Link to="/">Dashboard</Link>
              {/* </Nav.Link> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Container className="mt-3 contents">
        <Row>
          <Col className="contents">
            <h4 className="mb-1 titles"> Your Learning Materials </h4>
            <p> Revisit some of your notes </p>
            <div>
              {droppedFiles.map((file) => {
                return (
                  <div>
                    <PageItem key={file.file.name} file={file} />
                  </div>
                );
              })}
            </div>
          </Col>
          <Col className="contents">
            <h4 className="titles"> Upload New Materials </h4>
            <p className="extra">
              {" "}
              Start a new journey by uploading new books{" "}
            </p>

            <Dropzone updateAllFiles={updateAllFiles} />

            {/* <div className="genButton">
              <Button size="sm" className="buttons generate">
                {" "}
                Upload Material{" "}
              </Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
