import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-6 justify-content-center">
            <h2 className="font-weight-light">Politiscape</h2>
            <img className="" style={{marginBottom: "-90px"}} src="./images/politiscape.gif"/>
            <div className="d-inline-flex justify-content-center shadow" style={{height: "75px", width: "416px", backgroundColor: "blue" }}><h3 className="font-weight-light text-white mt-3">Politiscape</h3></div>
          </div>
          <div className="col-6">
            <h2 className="font-weight-light">MyCrypto</h2>
            <img className="" style={{marginBottom: "-90px"}} src="./images/mycrypto.jpg"/>
            <div className="d-inline-flex justify-content-center shadow" style={{height: "75px", width: "416px", backgroundColor: "blue" }}><h3 className="font-weight-light text-white mt-3">MyCrypto</h3></div>
          </div>
        </div>
      </div>
      // <div className="projects">
      //   { this.props.children }
      // </div>
    )
  }
}
