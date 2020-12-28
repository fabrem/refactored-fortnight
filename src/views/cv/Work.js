import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import Col from "reactstrap/lib/Col";

export default function Work() {
  return (
    <div className="section whoami">
      <Container>
        <div className="title">
          <h2>Expérience Professionelle</h2>
        </div>
        <div>
          <h5>
            Je suis un jeune enthousiaste du génie et de la technologie. Étudiant de 3e année en Génie Logiciel à l'Université Laval,
            je suis toujours à la recherche de nouveaux projets et de défis à surmonter. Ajouter de la sauce.
          </h5>
        </div>
      </Container>
    </div>
  );
}