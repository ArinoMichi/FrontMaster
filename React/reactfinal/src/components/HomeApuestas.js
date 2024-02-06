import React, { Component } from "react";
import imagen from "../assets/images/home.jpg";

export default class HomeApuestas extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img src={imagen}  style={{width:"3000px"}} className="img-fluid rounded" alt="..." />
        </div>
      </div>
    );
  }
}
