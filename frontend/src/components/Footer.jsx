import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="text-center text-white bg-dark card-footer">
          &copy; {new Date().getFullYear()}
          Copyright :{" "}
          <a href="https://github.com/piyushgargofficial" className="text-info">
            {" "}
            LocalMart.com{" "}
          </a>
          : All Rights Reserved
        </div>
      </>
    )
  }
}
