import react from 'react';
import Table from 'react-bootstrap/Table';

class TableData extends react.Component{
    render(){
        return(
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
                      <td>{this.props.temp}</td>
                      <td>{this.props.cityData[0].lat}</td>
                      <td>{this.props.cityData[0].lon}</td>
                    </tr>
                  </tbody>
                </Table>
        )
    }
}

export default TableData;