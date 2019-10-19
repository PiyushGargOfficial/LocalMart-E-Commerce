import React, { Fragment } from "react"
import Image1 from "../Images/menAndWomen.jpg"
import Image2 from "../Images/basketBallGuy.jpg"
import Image3 from "../Images/shoePoster.jpg"
import { Slide } from "react-slideshow-image"
import "../components/css/ImageSlider.css"

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true
}

const ImageSlider = () => {
  return (
    <Fragment>
      <div className="containerSlide">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img src={Image1} alt="Image1" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Image2} alt="Image2" />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={Image3} alt="Image3" />
            </div>
          </div>
        </Slide>
      </div>
    </Fragment>
  )
}

export default ImageSlider
