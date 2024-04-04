import React from "react"
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"

const CatNew = () => {
  return (
    <div className="new-page-body">
      <h2 className="gochi-hand-regular page-title centering-content">
        Add a New Cat
      </h2>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Enter Your Cat's Name</Label>
              <Input id="name" name="name" placeholder="Name" type="text" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Enter Your Cat's Age</Label>
              <Input
                id="age"
                name="age"
                placeholder="Age"
                type="number"
                min="0"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="enjoys">What does your cat enjoy doing?</Label>
          <Input id="enjoys" name="enjoys" placeholder="Enjoys" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input id="image" name="image" placeholder="Image URL" type="text" />
        </FormGroup>
        <div className="centering-content">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default CatNew
