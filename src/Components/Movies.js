import react from 'react';
import Table from 'react-bootstrap/Table';


class Movies extends react.Component{
    
    render(){
        return(
            <Table striped bordered hover style={{'margin-top':'2%'}}>
                <thead>
                    <tr>
                        <th>movie name</th>
                        <th>overview</th>
                        <th>average vote</th>
                        <th>popularity</th>
                        <th>release date</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                        {
                            
                            this.props.moviesData.map(value=>{
                                return (<tr>
                                    <td>{value.title}</td>
                                    <td>{value.overview}</td>
                                    <td>{value.avera_gevote}</td>
                                    <td>{value.popularity}</td>
                                    <td>{value.release_date}</td>
                                    </tr>)
                            })
                        }
                        
                        
                   
                </tbody>
            </Table>

        )
    }
}

export default Movies;