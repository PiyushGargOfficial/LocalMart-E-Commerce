import React, { Component } from "react"
import Product from "./Product"

export default class Products extends Component {
  state = {
    error: null
  }

  render() {
    const { error } = this.state
    const { handleDetails, allProducts } = this.props

    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Products List</h1>
            </div>
          </div>
          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              allProducts.map(product => {
                return (
                  <Product
                    addToCart={this.props.addToCart}
                    key={product._id}
                    product={product}
                    handleDetails={() => handleDetails(3, product._id)}
                  />
                )
              })
            )}
          </div>
        </div>
      </>
    )
  }
}
