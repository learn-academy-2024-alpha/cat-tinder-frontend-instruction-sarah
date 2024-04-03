import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders the Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const homeTitle = screen.getByText("Cat Tinder")
  expect(homeTitle).toBeInTheDocument()

  const homeSubHeader = screen.getByText("Find your cat a fury friend!")
  expect(homeSubHeader).toBeInTheDocument()

  const homeHeroImage1 = screen.getByAltText("four kittens in a basket")
  expect(homeHeroImage1).toBeInTheDocument()
  expect(homeHeroImage1).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )

  const homeHeroImage2 = screen.getByAltText("gray kitty taking a bath")
  expect(homeHeroImage2).toBeInTheDocument()
  expect(homeHeroImage2).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
})
