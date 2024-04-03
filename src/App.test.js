import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  const headerElement = screen.getByRole("link", {
    name: "outline of a cat profile and cat tinder in capitalized letters"
  })
  expect(headerElement).toBeInTheDocument()

  const footerElement = screen.getByRole("link", {
    name: "logo of a hand drawn cat face"
  })
  expect(footerElement).toBeInTheDocument()
})
