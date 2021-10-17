import React, { useState, useRef, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./MaterialPage.css";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChapProg from "../ChapterProgress/ChapterProgress";
import Graph from "react-graph-vis";
import { useHistory } from "react-router-dom";
import "../../styles.css";

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  },
  height: "400px"
};

// Map source code inspired by https://github.com/crubier/react-graph-vis/blob/master/example/src/index.js
export default function MaterialPage() {
  // Getting doc name
  // console.log("location original: ", window.location);
  var urlPath = window.location.pathname.split("/");
  // console.log("urlPath: ", urlPath);

  const history = useHistory();
  // const searchBar = useRef();
  const [searchValue, updateValue] = useState("");
  // const [graphs, updateGraphs] = useState();

  const handleChange = (event) => {
    updateValue(event.target.value);
  };

  const createNode = (x, y) => {
    const color = "#808080";
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = uuidv1();
      const from = Math.floor(Math.random() * (counter - 1)) + 1;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x }],
          edges: [...edges, { from, to: id }]
        },
        counter: id,
        ...rest
      };
    });
  };

  useEffect(() => {
    // updateValue(searchBar.current.value);
    // console.log(searchValue);
  }, [searchValue]);

  const [state, setState] = useState({
    counter: 5,
    // change this part when putting in the data
    graph: {
      nodes: [
        { id: 1, label: "Chapter 1", color: "#14bf96" },
        { id: 2, label: "Chapter 2", color: "#14bf96" },
        { id: 3, label: "Chapter 3", color: "#14bf96" },
        { id: 4, label: "Chapter 4", color: "#14bf96" },
        { id: 5, label: "Chapter 5", color: "#14bf96" }
      ],
      edges: [
        { from: 2, to: 1 },
        { from: 3, to: 1 },
        { from: 4, to: 1 },
        { from: 5, to: 1 }
      ]
    },
    events: {
      doubleClick: ({ nodes, edges }) => {
        console.log("location: ", window.location);
        const newLink = "/chapterPage/" + urlPath[2] + "/" + nodes;
        history.replace(newLink);
      },
      click: ({ nodes, edges }) => {
        console.log("Selected node: " + nodes);
      }
    }
  });
  const { graph, events } = state;
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

      <div>
        <Container>
          <Form>
            <Form.Control
              className="searchBar mt-3 ml-1 mb-3"
              placeholder="Search for a Node"
              onChange={handleChange}
              value={searchValue}
            />
          </Form>
          <p className="mt-3 nodeDesc">Drag on the nodes to select them</p>
        </Container>
      </div>
      <div className="footer">
        <ChapProg />
      </div>

      <div className="map-container">
        <Graph
          graph={graph}
          options={options}
          events={events}
          style={{ height: "80vh", zIndex: -10 }}
        />
      </div>
    </div>
  );
}
