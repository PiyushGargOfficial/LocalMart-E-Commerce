import React, { Component } from "react"
import axios from "axios"

export default class ProductDetails extends Component {
  state = {
    product: [],
    cartState: "Add to Cart"
  }

  onClickOnCart = () => {
    this.setState({ cartState: "In Cart" })
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct = () => {
    axios
      .get(`/api/products/${this.props.id}`)
      .then(data => {
        this.setState({ product: data.data })
      })
      .catch(err => this.setState({ error: err }))
  }

  render() {
    const { product } = this.state
    const { handleIndex } = this.props

    return (
      <>
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                back to product list
              </button>
              <img
                src={product.imagename}
                alt={product.title}
                className="d-block w-100"
              />
            </div>
            {/* details section */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase">{product.title}</h2>
              <h6 className="text-warning text-capitalize text-slanted">
                price : {product.price} $
              </h6>
              <div
                className="btn btn-primary mt-2 text-capitalize"
                onClick={() => {
                  this.onClickOnCart()
                  this.props.addToCart(product._id)
                }}
              >
                {this.state.cartState}
              </div>
              <h4 className="mt-3 mb-4 text-capitalize">
                {product.description}
              </h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}
