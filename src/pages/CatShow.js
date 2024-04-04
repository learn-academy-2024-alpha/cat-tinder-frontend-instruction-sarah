import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import NavButton from "../components/NavButton"

const CatShow = ({ cats, deleteCat }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  const handleDeleteCat = () => {
    deleteCat(cat.id)
    navigate("/cat-index")
  }
  return (
    <div className="page-body">
      <div>
        <h2 className="gochi-hand-regular page-title">Meet {cat.name}</h2>
        <p>Age {cat.age}</p>
        <p>
          {cat.name} enjoys {cat.enjoys}.
        </p>
        <img
          src={cat.image}
          alt={`profile of ${cat.name}`}
          className="show-cat-profile"
        />
      </div>
      <NavButton url="/cat-index" buttonContent="Back to All the Cats" />
      <NavButton
        url={`/cat-edit/${cat.id}`}
        buttonContent={`Edit ${cat.name}`}
      />
      <button
        onClick={() => handleDeleteCat(cat.id)}
        className="nav-button gochi-hand-regular"
      >
        Delete {cat.name}
      </button>
    </div>
  )
}

export default CatShow
