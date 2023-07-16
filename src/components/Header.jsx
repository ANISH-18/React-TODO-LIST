import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddIcon from "@mui/icons-material/Add";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>ToDo App</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to={"/create"}>
              <Nav.Link>
                <AddIcon />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
