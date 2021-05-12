import React, { Component } from "react";
import Display from './display';

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hej, this is IKEA Formation. ",
      firstFigure: '',
      secondFigure: '',
      result: 0,
      operator: "",
      buttons: [
        {
          input: 7,
          type: "number",
        },
        {
          input: 8,
          type: "number",
        },
        {
          input: 9,
          type: "number",
        },
        {
          input: "*",
          type: "operator",
        },
        {
          input: 4,
          type: "number",
        },
        {
          input: 5,
          type: "number",
        },
        {
          input: 6,
          type: "number",
        },
        {
          input: "-",
          type: "operator",
        },
        {
          input: 1,
          type: "number",
        },
        {
          input: 2,
          type: "number",
        },
        {
          input: 3,
          type: "number",
        },
        {
          input: "+",
          type: "operator",
        },
        {
          input: "/",
          type: "operator",
        },
        {
          input: 0,
          type: "number",
        },
        {
          input: ".",
          type: "comma",
        },
        {
          input: "=",
          type: "operator",
        },
      ],
    };
  }

  handleClick = (val) => {
    if (val.type === "number") {
      this.handleAddNumber(val.input);
    } else if (val.type === "operator") {
      this.handleAddOperator(val.input);
    } else {
			this.handleComma(val.input);
		}
  }

  handleAddOperator(operator) {
		this.setState({operator: operator})
		if (operator === '=') {
			this.handleCalculateResult();
		}
	}

  handleAddNumber(number) {
    if (!this.state.operator) {
      this.setState((prevState) => ({
        firstFigure: [...prevState.firstFigure, number.toString()],
      }));
    } else {
      this.setState((prevState) => ({
        secondFigure: [...prevState.secondFigure, number.toString()],
      }));
    }
  }

	handleComma(comma) {
    if (!this.state.operator) {
      this.setState((prevState) => ({
        firstFigure: [...prevState.firstFigure, comma],
      }));
    } else {
      this.setState((prevState) => ({
        secondFigure: [...prevState.secondFigure, comma],
      }));
    }
  }

	handleCalculateResult(){
		let firstFigure = parseFloat(this.state.firstFigure.join(''));
		let secondFigure = parseFloat(this.state.secondFigure.join(''));
		let operator = this.state.operator;
		// Calculate result
		let result = eval(firstFigure + operator + secondFigure);
		this.setState({result: result});

		this.setState({firstFigure: ''});
		this.setState({secondFigure: ''});
		this.setState({operator: ''});
	}


  render() {
    return (
      <div>
        <Display parentState = {this.state} handleClick = {this.handleClick}  />
      </div>
    );
  }
}

export default Calculator;
