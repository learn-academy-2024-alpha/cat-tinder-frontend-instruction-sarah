import React from "react"
import { NavLink } from "react-router-dom"
import catLogoSmall from "../assets/cat-logo-small.png"

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Sarah Proctor | LEARN Academy </p>
      <NavLink to="/">
        <img
          src={catLogoSmall}
          alt="logo of a hand drawn cat face"
          className="cat-logo-small"
        />
      </NavLink>
    </footer>
  )
}

export default Footer
