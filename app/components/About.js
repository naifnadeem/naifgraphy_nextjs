import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
 return (
  <Container fluid className="bg-black text-white w-full h-screen d-flex align-items-center justify-content-center " id="about">
    <Row className="align-items-center justify-content-center">
      <Col md={6} className="d-flex justify-content-center  mb-md-0">
        <div className="rounded-lg overflow-hidden border border-black shadow-lg mt-5 mt-md-0">
          <Image
            src="/bgimg.jpg"
            width={600}
            height={800}
            alt="Picture of the author"
            fluid
            className="pt-6 pt-md-0" // Add padding top for small and medium screens
          />
        </div>
      </Col>
      <Col md={6} className="text-left p-4">
        <h1 className="font-weight-bold display-4 ">About Me</h1>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
    </Row>
  </Container>
);
}
