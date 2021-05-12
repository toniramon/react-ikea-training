import React, { Component } from 'react'

export class Heroes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            heroes: ['Batman', 'Superman', 'Ironman'],
            newHero: ''
        }
    }

    handleClick() {
        let tmp = this.state.heroes;
        tmp = [...tmp, this.state.newHero];
        this.setState({heroes: tmp, newHero:''});
    }

    render() {
        let elements = <div></div>;
        elements = this.state.heroes.map((hero, index) =>
            <li class="list-group-item" key={index}>{hero}</li>
        )
        return (
            <div class="container">
                <div class="form-group">
                    <label >Nombre</label>
                    <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="" 
                        value={this.state.newHero} onChange={(event)=>{this.setState({newHero: event.target.value})}}/>
                    <button type="button" class="btn btn-primary mt-1" onClick={()=>{this.handleClick()}}>añadir</button>
                </div>
                <ul class="list-group">
                    {elements}
                </ul>
            </div>
        )
    }
}

export default Heroes
