import React from "react";
import { Container, Col, Row } from "reactstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../pages/register.css";

function Register() {
  return (
    <Container>
      <Row>
        <Col id="login-image-side"></Col>
        <Col id="login-form">
          <form>
            <h3>Iniciar sesión</h3>
            <TextField id="standard-basic" label="Usuario" defaultValue="" />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button id="submit-button" variant="contained" color="primary">
              Acceder
            </Button>
            <Button size="small" color="disabled">
              Olvidé mi Usuario / Contraseña
            </Button>
            <p>Si no tiene una cuenta puede:</p>
            <Button size="small" color="secondary">
              Registrarse
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
