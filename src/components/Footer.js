import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <MDBFooter className="text-center" color="white" bgColor="dark">
          <MDBContainer className="p-4">
            <section className="mb-4">
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="https://www.linkedin.com/in/moses-wachira-0704981b1/"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="https://github.com/mosesglitch"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                floating
                className="m-1"
                href="twitter.com"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </section>

            <section className="">
              <MDBRow center>
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <MDBIcon icon="home" className="me-2" />
                      Nairobi, NRB 1072, KE
                    </li>
                    <li>
                      <MDBIcon icon="envelope" className="me-3" />
                      mosesgachuru15@gmail.com
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <MDBIcon icon="phone" className="me-3" /> +254747167297
                    </li>
                    <li>
                      <MDBIcon fab icon="whatsapp" className="me-3" />
                      +255753782444
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022:
            <a className="text-white" href="https://mdbootstrap.com/">
              M.G.W
            </a>
          </div>
        </MDBFooter>
      </div>
    );
  }
}
export default Footer;
