import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card text-center shadow">
                    <div className="card-body">
                        <h1 className="card-title">Assignment 2</h1>
                        <h4 className="mb-4">Counter App</h4>

                        <h2 className="mb-4">{this.state.count}</h2>

                        <div className="d-flex justify-content-center gap-3">
                            <button
                                className="btn btn-success"
                                onClick={this.increment}
                                disabled={this.state.count === 5}
                            >
                                +
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={this.decrement}
                                disabled={this.state.count === -5}
                            >
                                -
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={this.reset}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
