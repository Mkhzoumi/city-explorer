import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Weather from './Components/Weather';
import Movies from './Components/Movies';



class App extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      status: false,
      cityData: [],
      show: false,
      weatherData: [],
      lat: '',
      lon: '',
      weatherStatus: false,
      moviesData: '',
      moviesStatus: false
    }
  }

  change = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  submit = async (e) => {
    e.preventDefault();

    this.temp = '';
    try {
      let userData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.e30a9dbbf203ed5e49c8e75e86f0ea56&q=${this.state.userInput}&format=json`);
      this.temp = this.state.userInput;
      this.setState({
        cityData: userData.data,
        status: true,
        lat: userData.data[0].lat,
        lon: userData.data[0].lon
      });
      let weatherData = await axios.get(`${process.env.REACT_APP_URL}?lon=${this.state.lon}&lat=${this.state.lat}`);
      this.setState({
        weatherData: weatherData.data,
        weatherStatus: true

      });
      let moviesData = await axios.get(`https://city-explorer-api-mkhzoumi.herokuapp.com/movies?query=${this.state.userInput}`)
      this.setState({
        moviesData: moviesData.data,
        moviesStatus: true
      });

      console.log(moviesData.data);

    } catch (error) {
      this.setState({
        show: true,
        status: false
      })
    }
  }


  handleClose = () => {
    this.setState({
      show: false
    })
  }



  render() {
    return (
      <>
        <div class='cont' style={{ display: 'grid', 'grid-template-columns': '1fr 2fr', 'grid-gap': '10em', padding: '5%' }}>
          <div class='form'>
            <Form onSubmit={this.submit} style={{ border: '1px solid', padding: '1em' }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City Name</Form.Label>
                <Form.Control type="text" placeholder="Enter City Name" onChange={this.change} />
              </Form.Group>
              <Button variant="secondary" type="submit"  >
                Explore!
              </Button>
            </Form>
            {this.state.status &&

              <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.e30a9dbbf203ed5e49c8e75e86f0ea56&center=${this.state.cityData[0].lat},${this.state.cityData[0].lon}&zoom=1-18`} rounded fluid style={{ 'margin-top': '5%' }} />
            }
          </div>






          <div class='table'>
            {this.state.status &&
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>City Name</th>
                      <th>Latitude</th>
                      <th>Longtitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.temp}</td>
                      <td>{this.state.cityData[0].lat}</td>
                      <td>{this.state.cityData[0].lon}</td>
                    </tr>
                  </tbody>
                </Table>
                {this.state.weatherStatus &&
                  <Weather
                    weatherData={this.state.weatherData}
                  />
                }
                {this.state.moviesStatus &&
                  <Movies
                    moviesData={this.state.moviesData}
                  />

                }
              </div>
            }
          </div>
        </div>


        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title style={{ color: 'red' }}>Error!</Modal.Title>
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
