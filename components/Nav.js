import React, { useState } from "react";
import styles from "../styles/components/Nav.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import Link from "next/link";

const NavGlobal = () => {
  const [show, setShow] = useState(false);

  const openOffcanvas = () => setShow(true);
  const closeOffcanvas = () => setShow(false);

  return (
    <div>
      <Navbar className={styles.navbar} fixed="top" expand="lg" variant="dark">
        <Link href="/" passHref>
          <Navbar.Brand className={styles.navbrand}>
            <Logo />
            <span className="inlinebuffer-5"></span>
            Team Enigma
          </Navbar.Brand>
        </Link>

        <button className={styles.navbartoggler} onClick={openOffcanvas}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <Navbar.Collapse id="basic-navbar-nav" className={styles.longnav}>
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={show} onHide={closeOffcanvas} placement="end" backdrop>
        <Offcanvas.Header
          closeButton
          className={styles.offcanvasheader}
          closeVariant="white"
        >
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasbody}>
          <div>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* to offset the navbar */}
      <section style={{ height: "56px" }}></section>
    </div>
  );
};

export default NavGlobal;
