import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      status: false,
      cityData: [],
      show:false
    }
  }

  change = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  submit = async (e) => {
    e.preventDefault();

    try {
      let userData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.e30a9dbbf203ed5e49c8e75e86f0ea56&q=${this.state.userInput}&format=json`);
      this.setState({
        cityData: userData.data,
        status: true
      });
    } catch (error) {
      this.setState({
        show: true,
        status:false
      })
    }   
  }


  handleClose=()=>{
this.setState({
  show: false
})
  }



  render() {
    return (
      <>
        <Form onSubmit={this.submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>city name</Form.Label>
            <Form.Control type="text" placeholder="Enter city" onChange={this.change} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>

        {this.state.status &&
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>city name</th>
                  <th>lat</th>
                  <th>lon</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>{this.state.userInput}</td>
                  <td>{this.state.cityData[0].lat}</td>
                  <td>{this.state.cityData[0].lon}</td>
                </tr>
              </tbody>
            </Table>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.e30a9dbbf203ed5e49c8e75e86f0ea56&center=${this.state.cityData[0].lat},${this.state.cityData[0].lon}&zoom=1-18`} rounded fluid style={{ 'margin-left': '30%' }} />
          </div>
        }


        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title style={{color:'red'}}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>please enter a valid location!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }




};






export default App;
