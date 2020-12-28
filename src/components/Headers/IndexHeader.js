import React from "react";

import { Container } from "reactstrap";
import Col from "reactstrap/lib/Col";


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/golf.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
            <Col className="mr-auto ml-auto" xs="5" sm="5" md = "5" lg="5" xl = "5">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/biner.jpg")}
                />
              </Col>
              <h1 className="presentation-title">Rémi Lévesque</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
              {/* <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              Software Engineering student
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Made by Rémi Lévesque - 2020
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
