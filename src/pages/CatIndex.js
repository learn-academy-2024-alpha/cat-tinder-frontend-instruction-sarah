import React from "react"
import { Card, CardBody, CardTitle, Button } from "reactstrap"
import { Link } from "react-router-dom"

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
                <Link to={`/cat-show/${cat.id}`}>
                  <Button>See More Info</Button>
                </Link>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
