import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../../styles.css";
import "./PageItem.css";
import axios from "axios";
const apiUrl = "/pdf";
export default function PageItem(props) {
  const file = props.file.file;
  console.log(file);
  const history = useHistory();
  const [data, setData] = useState({});

  const goToPage = (pageName) => {
    handleApi(file);
    history.push(pageName);
  };

  const handleApi = async (file) => {
    console.log("calling");
    const formData = new FormData();
    formData.append("pdf", file);
    const response = await axios.post(apiUrl, file);
    console.log("this is res");
    console.log(response);
    setData(response.data);
    console.log(data);
    // return response
    return response.data;
  };

  const pageName = `material/${props.file.file.name}/`;
  console.log("props: ", file);

  return (
    <div>
      <Card className="cardBody">
        <Card.Body>
          <Row>
            <Col xs={7} sm={7} md={7} lg={9} xl={9} className="bookItem">
              <Card.Title className="cardTitle">{file.name}</Card.Title>
              <Card.Text className="chapProg cardText">
                Chapter 3 of 11
              </Card.Text>
            </Col>
            <Col xs={5} sm={5} md={5} lg={3} xl={3} className="rightAlign">
              <Button
                size="sm"
                className="buttons"
                onClick={() => goToPage(pageName)}
              >
                Continue
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
