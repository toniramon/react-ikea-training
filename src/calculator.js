import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';

export class Calculator extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            message: '',
            buttons: [7,8,9,'X',4,5,6,'-',1,2,3,'+','%',0,',','=']
        }
    }

    handleClick(val){
        this.setState(prevState => ({
            message: [...prevState.message, val]
        }))
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div className="container row w-50">
                    {this.state.buttons.map((val) => (
                        <div className="col-3">
                            <Button variant="primary" className="w-100 m-2" onClick={() => this.handleClick(val)}>{val}</Button>
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
    
}

export default Calculator