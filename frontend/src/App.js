import React, { Component } from "react"
import LoginModal from "./components/auth/LoginModal"
import RegisterModal from "./components/auth/RegisterModal"
import ErrorModal from "./components/Error/ErrorModal"
import { Switch, Route } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={RegisterModal} />{" "}
          <Route path="/login" exact component={LoginModal} />{" "}
          <Route component={ErrorModal} />{" "}
        </Switch>{" "}
      </>
    )
  }
}
