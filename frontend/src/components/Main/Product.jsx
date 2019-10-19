import React, { Component } from "react"

export default class Product extends Component {
  state = { cartState: "Add to Cart" }

  onClickOnCart = () => {
    this.setState({ cartState: "In Cart" })
  }

  render() {
    const { handleDetails, product } = this.props

    return (
      <>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={product.imagename}
              alt={product.imagename}
              className="img-card-top"
              style={{
                height: "14rem"
              }}
            />
            <div className="card-body text-capitalize">
              <h6>{product.title}</h6>
              <h6 className="text-warning text-slanted">
                Price : {product.price} $
              </h6>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary text-capitalize"
                onClick={handleDetails}
              >
                Details
              </button>
              <div
                className="btn btn-success mx-2 text-capitalize"
                onClick={() => {
                  this.onClickOnCart()
                  this.props.addToCart(product._id)
                }}
              >
                {this.state.cartState}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
