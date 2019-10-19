import React, { Component } from "react"
import Logout from "../auth/Logout"
import { Link } from "react-router-dom"
import "../css/dashboard.css"
import AddProducts from "../AddProducts"

export default class Admin extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <div className="navbar-brand col-sm-3 col-md-2 mr-0">Local Mart</div>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <div className="nav-link">
                <Logout />
              </div>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      <span data-feather="home"></span>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <span data-feather="shopping-cart"></span>
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <span data-feather="users"></span>
                      Customers
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>
              <AddProducts />
            </main>
          </div>
        </div>
      </>
    )
  }
}
