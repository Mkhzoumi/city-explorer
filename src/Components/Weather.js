import react from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class Weather extends react.Component {

    render() {
        return (
            <ListGroup style={{'margin-top': '10%'}}>{
    this.props.weatherData.map(value => {
        return <ListGroup.Item>{value.weather.description}</ListGroup.Item>
        })}

            </ListGroup>
        )
    }

}





export default Weather;