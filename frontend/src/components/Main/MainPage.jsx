import React, { Component } from "react"
import ImageSlider from "../ImageSlider"
import ShoeCards from "../ShoeSlider"

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <ShoeCards />
      </div>
    )
  }
}
