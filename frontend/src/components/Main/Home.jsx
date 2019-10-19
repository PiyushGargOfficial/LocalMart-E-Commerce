import React, { Component } from "react"
// import Logout from "../auth/Logout.jsx"
import Navbar from "../Navbar"
import Footer from "../Footer"
import MainPage from "./MainPage"
import Products from "./Products"
import Cart from "./Cart"
import ProductDetails from "./ProductDetails"
import axios from "axios"

class Home extends Component {
  state = {
    allProducts: [],
    pageIndex: 0,
    details_id: null,
    cart: []
  }

  addToCart = id => {
    const product = this.state.allProducts.filter(product => product._id === id)
    const cartItems = this.state.cart
    this.setState({ cart: [product, ...cartItems] })
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    axios
      .get("/api/products/all")
      .then(data => {
        this.setState({ allProducts: data.data })
      })
      .catch(err => this.setState({ error: err }))
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  displayPage = index => {
    switch (index) {
      default:
      case 3:
        return (
          <ProductDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
            addToCart={this.addToCart}
          />
        )
      case 2:
        return <Cart cart={this.state.cart} />
      case 1:
        return (
          <Products
            handleDetails={this.handleDetails}
            allProducts={this.state.allProducts}
            addToCart={this.addToCart}
          />
        )
      case 0:
        return <MainPage />
    }
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <Navbar handleIndex={this.handleIndex} />
          {this.displayPage(this.state.pageIndex)}
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
