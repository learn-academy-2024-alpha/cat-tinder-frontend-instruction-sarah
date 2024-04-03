import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import NavButton from "../components/NavButton"

const CatIndex = ({ cats }) => {
  return (
    <div className="page-body">
      <h2 className="gochi-hand-regular page-title">Meet All the Cats</h2>
      <div className="index-cat-cards">
        {cats.map((cat) => {
          return (
            <Card key={cat.id}>
              <div className="index-profile-image-container">
                <img
                  alt={`profile of ${cat.name}`}
                  src={cat.image}
                  className="index-profile-image"
                />
              </div>
              <CardBody>
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <NavButton
                  url={`/cat-show/${cat.id}`}
                  buttonContent="See More"
                />
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
