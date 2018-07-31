import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-6">
            <h2 className="font-weight-light">Politiscape</h2>
          </div>
          <div className="col-6">
            <h2 className="font-weight-light">MyCrypto</h2>
          </div>
        </div>
      </div>
      // <div className="projects">
      //   { this.props.children }
      // </div>
    )
  }
}
