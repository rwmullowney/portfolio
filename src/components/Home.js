import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="font-weight-light">Hey!  I'm Ryan.</h2>

        <h3 className="font-weight-light mt-4">I'm a full-stack web developer.</h3>

        <h3 className="font-weight-light mt-4">Feel free to take a look at my portfolio, or connect with me through the tabs above.</h3>
        
        <h3 className="font-weight-light mt-4">And, you can view my resume <a href="">here</a>.</h3>
      </div>
      // <div className="home">
      //   { this.props.children }
      // </div>
    )
  }
}
