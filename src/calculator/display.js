import React, { Component } from "react";

import Button from "react-bootstrap/Button";

export class Display extends Component {

  render() {
    return (
      <div>
        <h1> {this.props.parentState.message}, resultado: {this.props.parentState.result} </h1>{" "}
        <div className="container row w-50">
          {" "}
          {this.props.parentState.buttons.map((val) => (
            <div className="col-3">
              <Button
                variant="primary"
                className="w-100 m-2"
                onClick={() => this.props.handleClick(val)}
              >
                {val.input}{" "}
              </Button>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Display;