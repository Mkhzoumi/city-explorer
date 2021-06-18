import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class FormInput extends react.Component{

    render(){
        return(
            <Form onSubmit={this.props.submit} style={{ border: '1px solid', padding: '1em' }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City Name</Form.Label>
                <Form.Control type="text" placeholder="Enter City Name" onChange={this.props.change} />
              </Form.Group>
              <Button variant="secondary" type="submit"  >
                Explore!
              </Button>
            </Form>
        )
    }

}

export default FormInput;