import React, { Component } from "react";

import Button from "react-bootstrap/Button";

export class Display extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center"> {this.props.parentState.message}</h1>
        <h2 className="text-center">Result: {this.props.parentState.result} </h2>
        <div className="container row w-auto">
          {this.props.parentState.buttons.map((val) => (
            <div className="col-3">
              <Button
                variant="primary"
                className="w-100 m-2"
                onClick={() => this.props.handleClick(val)}
              >
                {val.input}
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Display;
