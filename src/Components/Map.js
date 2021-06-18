import react from 'react';
import Image from 'react-bootstrap/Image';


class Map extends react.Component{
    render(){
        return(
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.e30a9dbbf203ed5e49c8e75e86f0ea56&center=${this.props.cityData[0].lat},${this.props.cityData[0].lon}&zoom=1-18`} rounded fluid style={{ 'margin-top': '5%' }} />
        )
    }

}

export default Map;