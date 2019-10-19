import React, { Fragment } from "react"
import Img1 from "../Images/Shoes/shoe1.jpg"
import Img2 from "../Images/Shoes/shoe2.jpeg"
//import Img3 from "../Images/Shoes/shoe3.jpg"
import Img4 from "../Images/Shoes/shoe4.jpg"
import Img5 from "../Images/Shoes/shoe5.jpeg"
// import Img6 from "../Images/Shoes/shoe6.jpg"

import { Link } from "react-router-dom"
import "../components/css/ShoeSlider.css"

const ShoeCards = () => {
  return (
    <Fragment>
      <div className="" id="main">
        <h2 className="text-center m-10">SHOP NOW</h2>
        <div className="d-flex flex-wrap flex-row align-content-stretch">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="card">
              <img
                src={Img1}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Ralph Sampson Lo Hoops Trainers</h5>
                <p className="card-text">
                  Ralph Sampson had the kind of career that is truly deserving
                  of the word "legendary": four-time NBA All-Star, NBA Rookie of
                  the Year, All-Star game MVP.
                </p>
                <Link to="/" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="card">
              <img
                src={Img2}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Legacy '68 Basketball Shoes</h5>
                <p className="card-text">
                  The truth about a legacy? It starts from the ground, and the
                  path to the top isn’t always straight up. But one thing’s a
                  fact no matter what: a legacy is yours to build.
                </p>
                <Link to="/" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>{" "}
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <div className="card">
              <img
                src={Img5}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Legacy Dark Mode Basketball Shoes
                </h5>
                <p className="card-text">
                  The Legacy is a performance basketball shoe offering hybrid
                  technology for both cushioning and responsiveness.
                </p>
                <Link to="/" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>{" "}
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <div className="card">
              <img
                src={Img4}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Uproar Core Men's Basketball Shoes
                </h5>
                <p className="card-text">
                  A trainer as wild and aggressive as the '90s style that
                  inspired it, but with a futuristic twist: PUMA Hoops style.
                </p>
                <Link to="/" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ShoeCards
