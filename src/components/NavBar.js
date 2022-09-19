import React from "react";
import { Nav, Row, Tab } from "react-bootstrap";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Academics from "./Academics";
import Col from "react-bootstrap/Col";

class NavBar extends React.Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="tabrow" sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"> Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Academics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Projects</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="tabrow2" sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Home />
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <Experience />
              </Tab.Pane>
            </Tab.Content>
            <Tab.Content>
              <Tab.Pane eventKey="third">
                <Academics />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Projects />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}
export default NavBar;
