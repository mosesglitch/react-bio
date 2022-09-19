import React from "react";
import Container from "react-bootstrap/Container";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./styles/Index.css";

class Academics extends React.Component {
  render() {
    return (
      <Container>
        <div className="d-flex align-items-start mb-3">
          <MDBRow>
            <MDBCol>
              <div className="newsec">
                <div className="academics">
                  <h5>ACADEMIC QUALIFICATIONS</h5>
                  <h6>
                    <b> 2022: Nanodegree (Ongoing) , FullstackWeb developer</b>
                  </h6>
                  <li>Institution: ALX Programme (Udacity)</li>
                  <h6>
                    <b>2022: Nanodegree, AWS MachineLearning Foundations</b>
                  </h6>
                  <li>Institution:Udacity</li>
                  <h6>
                    <b> 2015 - 2019:BSC Project Planning and Management</b>
                  </h6>
                  <li id="opening">
                    <span> Institution: Karatina University</span>
                    <span>
                      {" "}
                      Qualification: 2nd class honors(Upper Division)
                    </span>
                  </li>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="newsec">
                <h5 id="certifications">TRAININGS AND CERTIFICATIONS</h5>
                <ul className="certs">
                  <li>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/4Y3KBAU92NFE">
                      DeepLearning.AI TensorFlow Developer
                    </a>
                  </li>
                  <li>
                    <a href="ude.my/UC-87d4c2c2-21c3-4a5e-93bf-86a56039b268">
                      Math for Data science Data analysis and Machine Learning
                    </a>
                  </li>
                  <li>
                    <a href="https://www.credly.com/badges/dc54de6d-7863-490f-982f-e46b418b1e21?source=linked_in_profile">
                      Microsoft Certified: Azure A.I Fundamentals
                    </a>
                  </li>
                  <li>
                    <a href="https://www.credly.com/badges/e0afb675-f26a-45bb-b1ac-a8515fe1323f?source=linked_in_profile">
                      Microsoft Certified: Azure Data Fundamentals
                    </a>
                  </li>
                  <li>
                    <a href="https://www.credly.com/badges/5a51ad58-953d-4753-86d3-e195e679a503?source=linked_in_profile">
                      Microsoft Certified: Azure Fundamentals
                    </a>
                  </li>

                  <li>
                    <a href="https://www.credly.com/badges/03fa7deb-018a-4790-8080-9f398a453784/public_url">
                      IBM: Data Science Professional Certificate
                    </a>
                  </li>
                  <li>
                    <a href="https://open.sap.com/verify/xemel-guvut-rebem-huryl-byfic">
                      SAP: Python
                    </a>
                  </li>
                  <li>
                    <a href="https://open.sap.com/verify/xezol-gybab-ruzov-lanag-hibip">
                      SAP Analytics Cloud Become an Augmented BI Expert
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn/certification/moseswachira/intermediate-machine-learning">
                      Intermediate-Machine-Learning
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn/certification/moseswachira/intro-to-deep-learning">
                      Introduction to Deep Learning
                    </a>
                  </li>
                  <li>
                    <a href="ude.my/UC-1d08ae4a-bb0b-43ef-9be7-45680c14f71c">
                      Interactive Python Dashboards with Plotly and Dash
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kaggle.com/learn/certification/moseswachira/intro-to-machine-learning">
                      Introduction to machine learning
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </Container>
    );
  }
}
export default Academics;
