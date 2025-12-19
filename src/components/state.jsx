import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState(
            {
                count: this.state.count - 1
            }
        )
    }



    render() {
        return (
            <div>
                count: {this.state.count} <br />
                <button onClick={this.increment} >Increment</button>
                <button onClick={this.decrement} disabled={this.state.count === 0 ? true : false}>Decrement</button>
            </div>
        );
    }
}