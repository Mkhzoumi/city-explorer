import react from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class ErrorMessage extends react.Component{

    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title style={{ color: 'red' }}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>please enter a valid location!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        )
    }
}

export default ErrorMessage;