import React from "react";
import Typing from "react-typing-animation";
import { Button, Container, Row, Col } from "reactstrap";
import { YouTube, VpnKey } from "@material-ui/icons";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Container fluid id="home-banner-container">
          <Row>
            <Col lg="6">
              <Typing speed={15} className="main-title-container">
                <h2 id="main-title">
                  ¿Necesitas ayuda con tus Búsquedas Booleanas en LinkedIn?
                  <Typing.Delay ms={2000} />
                  <Typing.Backspace count={36} />
                  las invitaciones a Candidatos?
                  <Typing.Delay ms={2000} />
                  <Typing.Backspace count={87} />
                  LinkedIn-Tools es la solución.
                </h2>
              </Typing>
              <h3 id="subtitles">
                Asistencia para realizar <strong>Busquedas Booleanas.</strong>
              </h3>
              <h3 id="subtitles">
                <strong>Automatizacion</strong> de Invitaciones a potenciales
                Candidatos.
              </h3>
              <Button color="primary">
                <VpnKey /> Registrate
              </Button>{" "}
              <Button outline color="danger">
                <YouTube /> Demo
              </Button>{" "}
            </Col>
            <Col lg="6">
              <span id="main-image-home"></span>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Home;
