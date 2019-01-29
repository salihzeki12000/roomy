import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterContainer extends Component {
  constructor() {
    super()
    this.state = {
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      smoker: "",
      pets: "",
      cleanliness: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
        var data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
            }
        console.log("data1: ", data)
    // On submit of the form, send a POST request with the data to the server.
    fetch('/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
        return response.json();
        }).then(function(data) {
            console.log("data2: ", data)
            if(data === "success"){
               this.setState({msg: "Thanks for registering"});
            }
        }).catch(function(err) {
            console.log(err)
        });
  }

  render() {
    return (
        <div className="contentJumbo">
        <Jumbotron>
            <Form>

            <h3>Registration:</h3>
            <Form onSubmit={this.handleSubmit}>

                <FormGroup row>
                    <Label for="exampleSelect">Register as</Label>
                    <Col sm={10}>
                    <Input type="select" id="exampleSelect">
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        <option value="">-- Please select --</option>
                        <option value="roommate">Roommate</option>
                        <option value="landlord">Landlord</option>
                    </Input>
                    </Col>
                </FormGroup>

                <br /><br />

                <FormGroup row>
                    <Col md={6}>
                        <FormGroup row>
                            <Label>Name:</Label>
                            <Input
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder="First Name"/>

                            <Input
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Last Name"/>
                        </FormGroup>
                    </Col>
                 </FormGroup>

                 <br /><br />



                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleZip">Postal code</Label>
                      <Input type="text" name="postal_code" id="exampleZip"/>
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleZip">Street Number</Label>
                      <Input type="integer" name="street_number" id="exampleZip"/>
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleZip">Unit Number</Label>
                      <Input type="integer" name="unit_number" id="exampleZip"/>
                    </FormGroup>
                  </Col>

                 <FormGroup>
                   <Label for="exampleAddress">Address</Label>
                   <Input type="text" name="street_name" id="exampleAddress" placeholder="1234 Main St"/>
                 </FormGroup>

                 <FormGroup>
                  <Label for="exampleAddress2">Address 2</Label>
                  <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                 </FormGroup>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input type="text" name="city" id="exampleCity"/>
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Province</Label>
                      <Input type="text" name="province" id="exampleState"/>
                    </FormGroup>
                  </Col>

                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleZip">Price</Label>
                      <Input type="integer" name="price" id="exampleZip"/>
                    </FormGroup>
                  </Col>

                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleZip">Type</Label>
                      <Input type="select" name="type" id="exampleZip"/>
                       <option value="">-- Please select --</option>
                       <option name="appartment_building">Appartment building</option>
                       <option name="condo">Condo</option>
                       <option name="private_house">Private House</option>
                    </FormGroup>
                  </Col>

                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleZip">Unit Number</Label>
                      <Input type="integer" name="unit_number" id="exampleZip"/>
                    </FormGroup>
                  </Col>

                </Row>

                <br /><br />

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}> Email: </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="email@example.com"/>
                    </Col>
                </FormGroup>

                <br /><br />

                <FormGroup row>
                    <Label for="examplePassword" sm={2}> Password: </Label>
                    <Col sm={10}>
                        <Input
                            id="examplePassword"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"/>
                    </Col>
                </FormGroup>

                <br /><br />


                <FormGroup row>
                    <Label for="exampleDate"> Date of birth: </Label>
                    <Col sm={10}>
                        <Input
                            name="dateOfBirth"
                            type="date"
                            id="exampleDate"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}/>
                    </Col>
                </FormGroup>

                <br /><br />

                <FormGroup row>
                    <Label>Gender</Label>
                    <Col sm={10}>
                        <select>
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            <option value="">-- Please select --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </Col>
                </FormGroup>

                <br /><br />

                <FormGroup row>
                <Label> Smoker </Label>
                <Col sm={10}>
                    <select>
                        name="smoker"
                        value={this.state.smoker}
                        onChange={this.handleChange}
                        <option value="">-- Please select --</option>
                        <option value="male">Yes</option>
                        <option value="female">No</option>
                    </select>
                </Col>
                </FormGroup>

                <br /><br />


                <FormGroup row>
                <Label> Pets friendly </Label>
                <Col sm={10}>
                    <select>
                        name="pets"
                        value={this.state.pets}
                        onChange={this.handleChange}
                        <option value="">-- Please select --</option>
                        <option value="male">Yes</option>
                        <option value="female">No</option>
                    </select>
                </Col>
                </FormGroup>

                <br /><br />

                <FormGroup row>
                <Label> Cleanliness </Label>
                <Col sm={10}>
                    <select>
                        name="cleanliness"
                        value={this.state.cleanliness}
                        onChange={this.handleChange}
                        <option value="">-- Please select --</option>
                        <option value="male">High</option>
                        <option value="female">Medium</option>
                        <option value="female">Low</option>
                    </select>
                </Col>
                </FormGroup>

                <br /><br />

                <Button>Submit</Button>

            </Form>
            </Form><br /><br />
         </Jumbotron>
         </div>
      )
  }
}

export default RegisterContainer