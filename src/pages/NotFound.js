import React from "react"
import smallDog from "../assets/small-dog.jpeg"
import NavButton from "../components/NavButton"

const NotFound = () => {
  return (
    <>
      <div className="page-body">
        <h2 className="gochi-hand-regular page-title">No Cats Here!</h2>
        <h3>Oops looks like you are in the wrong spot.</h3>
        <NavButton url="/" buttonContent="Back to Home" />
        <div className="home-hero-images">
          <img
            src={smallDog}
            alt="very cute small dog who is not a cat"
            className="hero-image"
          />
        </div>
      </div>
    </>
  )
}

export default NotFound
