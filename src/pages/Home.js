import React from "react"
import NavButton from "../components/NavButton"

const Home = () => {
  return (
    <div className="page-body">
      <h1 className="gochi-hand-regular home-title">Cat Tinder</h1>
      <h3>Find your cat a fury friend!</h3>
      <NavButton url="/cat-index" buttonContent="Meet the Cats" />
      <div className="home-hero-images">
        <img
          src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="four kittens in a basket"
          className="hero-image"
        />
        <img
          src="https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gray kitty taking a bath"
          className="hero-image"
        />
      </div>
    </div>
  )
}

export default Home
