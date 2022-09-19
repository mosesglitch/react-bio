import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
let skillsInDepth = {
  "Data Analysis": [
    "Defining goal",
    "Data Exploration",
    "Data Preparation",
    "Model Building",
    "Data Collection",
    "Model Production",
  ],
  "Data Science": [
    "Classification",
    "Forecasting",
    "Clustering",
    "Natural Language Processing",
    "Computer Vision",
  ],
  "Data Visualization": [
    "Ms Excel",
    "Power BI",
    "Tableau",
    "Matplotlib",
    "Plotly",
  ],
  Programming: ["Python", "C", "Javascript", "HTML", "CSS"],
  RDBMS: [
    "SQL",
    "NoSQL",
    "Object Relational Mapping",
    "DB Theory",
    "DB Modelling",
  ],
  "Web Development": [
    "Django",
    "Flask",
    "Javascript",
    "ReactJS",
    "APIs",
    "Access Management",
  ],
};

class SkillsInDepth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tools = skillsInDepth[this.props.selectedSkill].map((tool, i) => (
      <MDBCardText key={i}>{tool}</MDBCardText>
    ));

    return (
      <div>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{this.props.selectedSkill}</MDBCardTitle>
            {tools}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default SkillsInDepth;
