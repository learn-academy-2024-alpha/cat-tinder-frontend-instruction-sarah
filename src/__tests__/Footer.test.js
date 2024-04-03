import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"
import catLogoSmall from "../assets/cat-logo-small.png"

test("renders the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const footerTextContent = screen.getByText(
    /2024 Sarah Proctor | LEARN Academy/
  )
  expect(footerTextContent).toBeInTheDocument()

  const footerLogo = screen.getByAltText("logo of a hand drawn cat face")
  expect(footerLogo).toBeInTheDocument()
  expect(footerLogo).toHaveAttribute("src", catLogoSmall)
  expect(
    screen.getByRole("link", { name: "logo of a hand drawn cat face" })
  ).toHaveAttribute("href", "/")
})
