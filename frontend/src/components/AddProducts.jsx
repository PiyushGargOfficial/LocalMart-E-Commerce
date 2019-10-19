import React, { Component } from "react"
import TableContent from "./TableContent"
import axios from "axios"

class AddProducts extends Component {
  state = {
    title: "",
    price: "",
    description: "",
    error: null,
    products: [],
    updateId: null
  }

  handleRemoveProduct = id => {
    axios
      .delete(`/api/products/${id}`)
      .then(data => {
        console.log(data.data)
        this.getProducts()
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleUpdateProduct = id => {
    const findProduct = this.state.products.filter(
      product => product._id === id
    )

    this.setState({
      title: findProduct[0].title,
      price: findProduct[0].price,
      description: findProduct[0].description,
      updateId: findProduct[0]._id
    })
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts() {
    axios
      .get("/api/products/all")
      .then(data => {
        this.setState({ products: data.data })
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleAdd = e => {
    e.preventDefault()

    const { title, price, description } = this.state

    const product = { title, price, description }

    axios
      .post("/api/products/add", product)
      .then(data => {
        this.setState({
          title: "",
          description: "",
          price: "",
          error: null
        })
        const product = data.data
        const { products } = this.state
        products.push(product)
        this.setState({ products: products })
      })
      .catch(err => this.setState({ error: err.response.data.msg }))
  }

  Update = () => {
    const { title, price, description, updateId } = this.state

    const updatedProduct = {
      title,
      price,
      description
    }

    if (updateId != null) {
      axios
        .patch("/api/products/" + updateId, updatedProduct)
        .then(data => {
          this.getProducts()
          this.setState({
            updateId: null,
            title: "",
            description: "",
            price: ""
          })
        })
        .catch(err => console.log(err))
    } else {
      alert("Select a Product to update from the table..")
    }
  }

  render() {
    return (
      <>
        <form style={{ marginBottom: "20px" }}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="add title here.."
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              className="form-control"
              value={this.state.price}
              onChange={this.handleChange}
              min="0"
              placeholder="add the price..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="text"
              className="form-control"
              rows="4"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="write something about product here.."
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={this.handleAdd}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-warning mr-2"
              onClick={this.Update}
            >
              Update
            </button>
          </div>
          {this.state.error ? (
            <div className="form-group alert-danger m-5 text-capitalize p-1 rounded">
              {this.state.error}
            </div>
          ) : null}
        </form>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Operations</th>
              <th scope="col">Upload Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => (
              <TableContent
                product={product}
                handleRemoveProduct={this.handleRemoveProduct}
                handleUpdateProduct={this.handleUpdateProduct}
                key={product._id}
              />
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default AddProducts
