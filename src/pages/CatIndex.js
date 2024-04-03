import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="page-body">
      <h2 className="gochi-hand-regular">Meet All The Cats</h2>
      <div className="index-cat-cards">
        {cats.map((cat) => {
          return (
            <Card
              key={cat.id}
              style={{
                width: "18rem"
              }}
            >
              <img alt={`profile of ${cat.name}`} src={cat.image} />
              <CardBody>
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <Button>See More Info</Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
