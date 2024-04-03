import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  return (
    <div className="page-body">
      <h2 className="gochi-hand-regular">Meet {cat.name}</h2>
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
  )
}

export default CatShow
