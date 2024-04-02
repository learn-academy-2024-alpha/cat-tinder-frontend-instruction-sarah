import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catTinderLogo from "../assets/cat-tinder-logo.png"

const Header = () => {
  return (
    <Nav className="me-auto">
      <div>
        <NavLink to="/">
          <img
            src={catTinderLogo}
            alt="outline of a cat profile and cat tinder in capitalized letters"
            className="cat-tinder-logo"
          />
        </NavLink>
      </div>
      <div className="header-nav-links">
        <NavLink to="/cat-index" className="nav-link">
          Meet All the Cats
        </NavLink>
        <NavLink to="/cat-new" className="nav-link">
          Add a Cat
        </NavLink>
        <a
          href="https://animalcenter.org/adopt-a-pet/adoptable-cats/"
          target="blank"
          className="nav-link"
        >
          Adopt a Cat
        </a>
      </div>
    </Nav>
  )
}

export default Header
