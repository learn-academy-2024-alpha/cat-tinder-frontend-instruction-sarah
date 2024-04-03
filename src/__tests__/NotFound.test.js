import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"
import smallDog from "../assets/small-dog.jpeg"

test("renders the NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )
  const notFoundTitle = screen.getByText("No Cats Here!")
  expect(notFoundTitle).toBeInTheDocument()

  const notFoundSubHeader = screen.getByText(
    "Oops looks like you are in the wrong spot."
  )
  expect(notFoundSubHeader).toBeInTheDocument()

  const notFoundHeroImage = screen.getByAltText(
    "very cute small dog who is not a cat"
  )
  expect(notFoundHeroImage).toBeInTheDocument()
  expect(notFoundHeroImage).toHaveAttribute("src", smallDog)
})
