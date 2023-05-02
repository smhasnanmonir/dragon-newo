import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Navbar.css";
const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" srcset="" />
        <p className="mt-2">Journalism Without Fear or Favor</p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex p-3'">
        <button className="btn btn-danger">Latest</button>
        <Marquee speed={50} pauseOnHover className="text-danger">
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text. I can be a React component, multiple React components, or
          just some text.
        </Marquee>
      </div>
      <Navbar bg="light" variant="light" className="mt-3 mb-3">
        <Container>
          <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
