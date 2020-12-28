/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

export default function Whoami() {
  return (
    <div className="section whoami">
      <Container>
        <div className="title">
          <h2>Whoami</h2>
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
