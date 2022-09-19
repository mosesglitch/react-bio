import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
class Projectlist extends React.Component {
  render() {
    const projectmap = this.props.projectdict.map((project, i) => (
      <MDBCard key={i}>
        <MDBCardImage src={project.src} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText>{project.text}</MDBCardText>
          <MDBCardText>
            <MDBIcon far icon="file-code" />
            <a href={project.code} className="stretched-link"></a>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ));
    return (
      <Container>
        <MDBCardGroup>{projectmap}</MDBCardGroup>
      </Container>
    );
  }
}
export default Projectlist;
