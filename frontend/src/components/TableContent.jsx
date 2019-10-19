import React, { Component } from "react"
import FileUpload from "./FileUpload"

export default class TableContent extends Component {
  render() {
    const { product, handleRemoveProduct, handleUpdateProduct } = this.props

    return (
      <>
        <tr key={product._id}>
          <td className="text-capitalize">{product.title}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>
            <button
              className="btn btn-danger mr-2"
              onClick={() => handleRemoveProduct(product._id)}
            >
              Remove
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleUpdateProduct(product._id)}
            >
              Update
            </button>
          </td>
          <td>
            <FileUpload
              id={product._id}
              imagePath={product.imagepath}
              image={product.imagename}
            />
          </td>
        </tr>
      </>
    )
  }
}
