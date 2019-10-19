import React, { Component } from "react"
import axios from "axios"

export default class FileUpload extends Component {
  state = {
    file: "",
    filename: "Choose File",
    uploadedFile: {}
  }

  onChange = e => {
    if (!e.target.files[0]) {
      console.log("Please Select A File..")
    } else {
      this.setState({
        file: e.target.files[0],
        filename: e.target.files[0].name
      })
    }
  }

  componentDidMount() {
    this.setState({ filename: this.props.image })
  }

  onSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("file", this.state.file)

    try {
      const res = await axios.post("/api/products/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ProductId: this.props.id
        }
      })
      const { fileName, filePath } = res.data
      this.setState({ uploadedFile: { fileName, filePath } })
      console.log("File Uploaded..")
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server.. ")
      } else {
        console.log(err.response.data.msg)
      }
    }
  }

  render() {
    return (
      <div>
        <div className="custom-file">
          <label className="custom-file-label" htmlFor="chooseFile">
            {this.state.filename}
          </label>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-2"
            onClick={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}
