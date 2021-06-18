import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import react from 'react';
import FormInput from './Components/Form';
import Weather from './Components/Weather';
import Movies from './Components/Movies';
import Map from './Components/Map';
import TableData from './Components/Table';
import ErrorMessage from './Components/ErrorMessage';




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

            <FormInput
              change={this.change}
              submit={this.submit}
            />

            {this.state.status &&
              <Map
                cityData={this.state.cityData}
              />
            }
          </div>

          <div class='table'>
            {this.state.status &&
              <div>

                <TableData
                  cityData={this.state.cityData}
                  temp={this.temp}
                />

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
        <ErrorMessage
          show={this.state.show}
          handleClose={this.handleClose}
        />
      </>
    )
  }
};






export default App;
