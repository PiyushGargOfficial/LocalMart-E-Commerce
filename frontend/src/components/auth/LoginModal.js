import React, { Component } from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../../actions/authAction"
import { clearErrors } from "../../actions/errorAction"
import Home from "../Main/Home"
import Admin from "../Main/Admin"
import PropTypes from "prop-types"

class LoginModal extends Component {
  state = {
    email: "",
    password: "",
    msg: null
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props

    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({
          msg: error.msg.msg
        })
      } else {
        this.setState({
          msg: null
        })
      }
    }
  }
  static propTypes = {
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    //Clear Errors :
    this.props.clearErrors()

    const { email, password } = this.state

    //Create User Body :
    const User = {
      email,
      password
    }

    //Attempt to Register
    this.props.login(User)

    this.setState({
      password: "",
      email: ""
    })
  }

  render() {
    return (
      <>
        {" "}
        {this.props.isAuthenticated ? (
          this.props.isAdmin ? (
            <Admin />
          ) : (
            <Home />
          )
        ) : (
          <div className="container ">
            <legend className="font-weight-bold text-center">
              {" "}
              Login Page{" "}
            </legend>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email"> Email address </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <small> Don 't have an Account ?</small>
                <Link to="/">
                  <span className="ml-2"> Register </span>{" "}
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>{" "}
              {this.state.msg ? (
                <div className="form-group alert-danger m-5 text-capitalize p-1 rounded">
                  {" "}
                  {this.state.msg}
                </div>
              ) : null}
            </form>{" "}
          </div>
        )}{" "}
      </>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin
})

export default connect(
  mapStateToProps,
  {
    login,
    clearErrors
  }
)(LoginModal)
