import React from "react";
import Projectlist from "./Projectlist";
import Container from "react-bootstrap/Container";
const projectdict = [
  {
    src: "https://media.istockphoto.com/photos/large-concert-hall-all-lit-up-picture-id147332504?b=1&k=20&m=147332504&s=170667a&w=0&h=6GfhOezKSBnaaGlDpq9l9Xu4m38TP0m2kANDMd7rBeU=",
    title: "Fyurr",
    text: "Social",
    code: "https://github.com/mosesglitch/Fyyur",
  },
  {
    src: "https://i0.wp.com/blockchainstock.blob.core.windows.net/article/5D146F6CA305F21597C0C59C4260B21CFE13B2B2A90E664E63DE8990A787D9A4.jpg?resize=696%2C365&ssl=1",
    title: "Trivia",
    text: "Fun",
    code: "https://github.com/mosesglitch/trivia_app",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656__340.jpg",
    title: "Coffee shop",
    text: "Entreprise",
    code: "https://github.com/mosesglitch/Coffee-shop-app",
  },
];
class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Projectlist projectdict={projectdict} />
      </Container>
    );
  }
}
export default Projects;
