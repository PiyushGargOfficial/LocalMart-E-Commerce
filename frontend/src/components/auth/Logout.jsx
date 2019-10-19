import React from "react"
import { logout } from "../../actions/authAction"
import { connect } from "react-redux"
import PropTypes from "prop-types"

class LogOut extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  render() {
    return (
      <>
        <button
          onClick={this.props.logout}
          className="btn text-white font-weight-bold text-capitalize"
        >
          LogOut
        </button>{" "}
      </>
    )
  }
}

export default connect(
  null,
  {
    logout
  }
)(LogOut)
