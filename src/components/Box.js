import React, { Component } from 'react'

export class Box extends Component {
  render() {
    return (
      <div className="wrapper">
        <div style={{
            backgroundColor: `${this.props.color}`}} className="box">
          <button onClick={() => {this.props.handleClick()}} className="button">
            Change Color
          </button>
        </div>
      </div>
    )
  }
}

export default Box;
