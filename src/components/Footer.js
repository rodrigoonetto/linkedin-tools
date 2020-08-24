import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { MailOutline, LinkedIn, YouTube, Instagram } from "@material-ui/icons";

import "./footer.css";

function Header() {
  return (
    <React.Fragment>
      <footer>
        <Container fluid>
          <Row>
            <Col lg={{ size: 2, offset: 2 }}>
              <img
                class="logo-footer"
                src={require("../assets/img/linkedlogo.png")}
              ></img>
              <h5>LinkedIn Tools</h5>
              <MailOutline />
              <Badge href="mailto: contacto@linkedintools.com.ar" color="dark">
                contacto@linkedintools.com.ar
              </Badge>
            </Col>
            <Col lg="2" className="footer-column">
              <h5>LinkedIn Tools</h5>
              <Link to="/">Home</Link>
              <Link to="/register">Registrarse</Link>
              <Link to="/login">Loguearse</Link>
            </Col>
            <Col lg="2" className="footer-column">
              <h5>Recursos</h5>
              <Link to="/profile">Mi Perfil</Link>
              <Link to="/automation-tools">Invitaciones automáticas</Link>
              <Link to="/automation-tools">Desinvitaciones automáticas</Link>
              <Link to="/candidate-search">Búsqueda de candidatos</Link>
            </Col>
            <Col lg="2" className="footer-column">
              <h5>Seguinos</h5>
              <a href="#">
                <LinkedIn fontSize="large" className="social-link" />
                LinkedIn
              </a>
              <a href="#">
                <Instagram fontSize="large" className="social-link" />
                Instagram
              </a>
              <a href="#">
                <YouTube fontSize="large" className="social-link" />
                YouTube
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 6, offset: 3 }}>
              <p className="footer-copyright">
                © 2020 LinkedIn Tools. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Header;
