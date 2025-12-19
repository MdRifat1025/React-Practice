import React, { Component } from 'react'

export default class onchange extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ""
        };
    }

    change = (e) => {
        // console.log(e.target.value);
        this.setState({
            name: e.target.value
        }, () => {
            console.log(this.state.name);
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.change} />
                <h1>{this.state.name}</h1>
                <button >click me</button>
            </div>
        )
    }
}
