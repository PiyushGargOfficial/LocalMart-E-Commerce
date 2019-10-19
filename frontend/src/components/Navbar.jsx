import React, { Component } from "react"
import Logout from "../components/auth/Logout"
import "./css/Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div
            className="navbar-brand cursor"
            onClick={() => this.props.handleIndex(0)}
          >
            LocalMart
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ marginLeft: "80px" }}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <div
                className="nav-item nav-link active cursor"
                onClick={() => this.props.handleIndex(0)}
              >
                Home <span className="sr-only">(current)</span>
              </div>
              <div
                className="nav-item nav-link cursor"
                onClick={() => this.props.handleIndex(1)}
              >
                Products
              </div>
            </div>
          </div>
          <div
            className="nav-item nav-link float-right text-white cursor"
            onClick={() => this.props.handleIndex(2)}
          >
            Cart<i className="fas fa-shopping-cart"></i>
          </div>
          <div className="nav-item nav-link float-right text-white cursor">
            <Logout />
          </div>
        </nav>
      </div>
    )
  }
}
