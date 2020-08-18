import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function Authorization(props) {
    let showFlag = props.showFlag;
    let setShowFlag = props.setShowFlag;

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    function handleClose() {
        localStorage.removeItem('token');
        setShowFlag(false);
    }

    function handleSignIn() {
        localStorage.setItem('token', name + " " + password);
        setPassword('');
        setName('');
        setShowFlag(false);
    }

    return (
        <Modal show={showFlag} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Authorization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row}>
                    <Form.Label className = "text-center" column sm="3">
                        Name
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} 
                        placeholder="Type name" minLength={3} maxLength={15} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className = "text-center" column sm="3">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" value={password} onChange= {(e) => setPassword(e.target.value)}
                         placeholder="Type password" minLength={4} maxLength={12} />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSignIn()}>
                    sign in
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Authorization;