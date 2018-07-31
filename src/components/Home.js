import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="font-weight-light" >Hey!  I'm Ryan.</h2>

        <h3 className="font-weight-light mt-4">I'm a full-stack web developer.</h3>
      </div>
      // <div className="home">
      //   { this.props.children }
      // </div>
    )
  }
}
