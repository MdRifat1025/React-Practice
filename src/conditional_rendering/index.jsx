import React, { Component } from 'react'
import Homepage from './homepage.jsx'
import Login from './login.jsx'

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }


  render() {
    const { isLoggedIn } = this.state

    const element = isLoggedIn ? <Homepage /> : <Login />

    return (
      <div>
        {element}
      </div>
    )
    // if (this.state.isLoggedIn) {
    //   return <Homepage />
    // } else {
    //   return <Login />
    // }
  }
}
