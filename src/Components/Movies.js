import react from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class Movies extends react.Component {

    render() {
        console.log(this.props.moviesData);
        return (
            <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '4%' }}>
                {this.props.moviesData.map(value => {
                    return (
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={value.img} />
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    {value.overview}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup>vote: {value.avera_gevote}</ListGroup>
                                <ListGroup>popularity: {value.popularity}</ListGroup>
                                <ListGroup>release date: {value.release_date}</ListGroup>
                            </ListGroup>
                        </Card>
                    )
                })}
            </div>
        )
    }
}









export default Movies;