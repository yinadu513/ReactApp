import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <strong>ImageApp v1</strong>
          </a>
          <span className="navbar-nav ml-auto">
            <i className="fa fa-shopping-cart mr-1">
              ( {this.props.imgInCart.length} )
            </i>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
