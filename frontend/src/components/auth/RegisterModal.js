import React, { Component } from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { register } from "../../actions/authAction"
import { clearErrors } from "../../actions/errorAction"

class RegisterModal extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null
  }

  static propTypes = {
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props

    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }
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

    const { name, email, password } = this.state

    //Create User Body :
    const newUser = {
      name,
      email,
      password
    }

    //Attempt to Register
    this.props.register(newUser)

    this.setState({
      name: "",
      password: "",
      msg: null,
      email: ""
    })
  }

  render() {
    return (
      <>
        <div className="container ">
          <legend className="font-weight-bold text-center">
            Register Page
          </legend>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Username"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="password">Password</label>
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
              <small>Already have an Account ?</small>
              <Link to="/login">
                <span className="ml-2">Login</span>
              </Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {this.state.msg ? (
              <div className="form-group alert-danger m-5 text-capitalize p-1 rounded">
                {this.state.msg}
              </div>
            ) : null}
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal)
