import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { AccountCircle, ExitToApp, Face, VpnKey } from "@material-ui/icons";

import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <header>
        <Navbar light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img
                class="logo-header"
                src={require("../assets/img/linkedlogo.png")}
              ></img>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavLink>
                <Link to="/">HOME</Link>
              </NavLink>
              <NavLink>
                <Link to="/candidate-search">BUSQUEDA</Link>
              </NavLink>
              <NavLink>
                <Link to="/automation-tools">AUTOMATIZACION</Link>
              </NavLink>
              <NavLink id="register">
                <Link to="/register">
                  <VpnKey fontSize="small" /> REGISTRATE
                </Link>
              </NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret id="dropdownicon">
                  <AccountCircle />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/login">
                      <ExitToApp />
                      Loguearse
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/profile">
                      <Face />
                      Mi Perfil
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </React.Fragment>
  );
}

export default Header;
