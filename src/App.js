import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  const createNewCat = (newCat) => {
    console.log(newCat)
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cat-index" element={<CatIndex cats={cats} />} />
        <Route path="cat-show/:id" element={<CatShow cats={cats} />} />
        <Route
          path="cat-new"
          element={<CatNew createNewCat={createNewCat} />}
        />
        <Route path="cat-edit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
