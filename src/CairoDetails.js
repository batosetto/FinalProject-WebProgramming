import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion"
import Travellers from "./pictures/travellers.png"


export default function CairoDetails() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={10} className="details">
          <h2 className="title">Cairo</h2>
            <Accordion className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Accommodation
                </Accordion.Header>
                <Accordion.Body>
                  Four Seasons Hotel Cairo at Nile Plaza
                  <br />
                  Sofitel Cairo Nile El Gezirah
                  <br />
                  The Nile Ritz-Carlton, Cairo
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Dining
                </Accordion.Header>
                <Accordion.Body>
                  Felfela
                  <br />
                  Abou El Sid
                  <br />
                  Sequoia
                  <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Transportation
                </Accordion.Header>
                <Accordion.Body>
                  Metro
                  <br />
                  Microbuses
                  <br />
                  Taxis
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Landmarks
                </Accordion.Header>
                <Accordion.Body>
                  Pyramids of Giza
                  <br />
                  The Egyptian Museum
                  <br />
                  The Citadel of Saladin
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

            
          </Col>
          
            
          
          <Col></Col>
          
        </Row>
      </Container>
      <img className="travellersImage" src={Travellers}/>
    </div>
  );
}
