import React from "react";
import Container from "react-bootstrap/Container";
import "./styles/Index.css";

class Experience extends React.Component {
  render() {
    return (
      <Container>
        <div className="newsec" id="work">
          <h5>WORK EXPERIENCE</h5>
          <h6>
            <b> Quipbank Trust Limited / VAELL</b>
          </h6>
          <li>
            <h6>Fleet Data Analyst</h6>
          </li>
          <li>
            <i> March 2021-Recent</i> &emsp;&emsp;&emsp;&emsp;
            <span>Mwanza,Tz</span>
          </li>
          <h6>Responsibilities</h6>
          <ul className="experienceul">
            <li>
              Mining data from primary and secondary sources, then reorganizing
              said data in a format that can be easily read by either human or
              machine.
            </li>
            <li>
              Analyzing which data is important to the task at hand and which is
              irrelevant.
            </li>
            <li>
              Segregation, classification and analysis of data. Identifying
              major trends.
            </li>
            <li>
              Compilation of reports based on analysis, keeping in mind the end
              users requirements.
            </li>
            <li>
              Presentation of findings in the form of graphs, tables and charts.
            </li>
            <li>
              Using statistical tools to perform data mining tasks, for
              predictive or forecasting purposes.
            </li>
          </ul>
          <hr className="hrs" />

          <h6>Quipbank Trust Limited / VAELL</h6>
          <li>
            <h6>Business Development</h6>
          </li>
          <li>
            <i> July 2020 - March 2021 </i>&emsp;&emsp;&emsp;&emsp;
            <span>Nairobi,Ke</span>
            <h6>Responsibilities</h6>
            <p>
              It was an opportunity to broaden my understanding in business
              processes, marketing, project management, procurement and data
              analysis . I got a grasp of how different business functions
              interact to produce intended outcomes.
            </p>
          </li>
        </div>
      </Container>
    );
  }
}
export default Experience;
