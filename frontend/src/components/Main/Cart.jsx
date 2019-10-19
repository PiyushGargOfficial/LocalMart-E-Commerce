import React, { Component } from "react"

export default class Cart extends Component {
  state = {
    cartStatus: []
  }

  componentDidMount() {
    this.checkCartState()
  }

  checkCartState = () => {
    if (this.props.cart.length === 0) {
      this.setState({ cartStatus: null })
    } else {
      this.setState({ cartStatus: this.props.cart })
    }
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Preview</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cartStatus ? (
            this.state.cartStatus.map(cartItem => (
              <tr key={cartItem[0]._id}>
                <td>{cartItem[0].title}</td>
                <td>{cartItem[0].price}$</td>
                <td>
                  <img
                    src={cartItem[0].imagename}
                    alt={cartItem[0].imagename}
                    style={{ width: "40px", height: "40px" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <h1 className="text-center"> Your Cart is Empty...</h1>
          )}
        </tbody>
      </table>
    )
  }
}
