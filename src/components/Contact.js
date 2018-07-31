import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container text-center">
        <h2>Behold, a Contact page</h2>
        <img className="mx-1" style={{maxHeight: "32px", maxWidth: "32px", width: "100%"}} src="./images/email.svg"/>
        
        <img className="mx-1" style={{maxHeight: "32px", maxWidth: "32px", width: "100%"}} src="./images/linkedin.svg"/>
        <img className="mx-1" style={{maxHeight: "32px", maxWidth: "32px", width: "100%"}} src="./images/github.svg"/>
      </div>
      // <div className="contact">
      //   { this.props.children }
      // </div>
    )
  }
}
