import react from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends react.Component {

    render() {
        return (
            <div>
               
            <ListGroup style={{'margin-top': '10%'}}>
            <h2 style={{'text-align':'center'}}>Forecast</h2>{
    this.props.weatherData.map(value => {
        return <ListGroup.Item>{value.weather.description}</ListGroup.Item>
        })}

            </ListGroup>
            </div>
        )
    }

}





export default Weather;