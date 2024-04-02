import React from "react"
import smallDog from "../assets/small-dog.jpeg"

const NotFound = () => {
  return (
    <>
      <div className="page-body">
        <h3 className="gochi-hand-regular not-found-title">No Cats Here!</h3>
        <h3>Oops looks like you are in the wrong spot.</h3>
        <div className="home-hero-images">
          <img
            src={smallDog}
            alt="very cute small dog who is not a cat"
            className="home-hero-image"
          />
        </div>
      </div>
    </>
  )
}

export default NotFound
