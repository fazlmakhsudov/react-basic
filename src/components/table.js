import React, { useState } from 'react';
import { Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';

function TableComponent(props) {
    const [data, setData] = useState([
        { id: 1, value: "a" },
        { id: 2, value: "b" },
        { id: 3, value: "c" },
        { id: 4, value: "d" },
        { id: 5, value: "e" },
        { id: 6, value: "f" },
        { id: 7, value: "g" },
        { id: 8, value: "h" },
        { id: 9, value: "i" },
        { id: 10, value: "j" },
    ]);
    const [removeFlag, setRemoveFlag] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const [createFlag, setCreateFlag] = useState(false);
    const [value, setValue] = useState('');
    const [id, setId] = useState(-1);

    function handleClose() {
        setRemoveFlag(false);
        setCreateFlag(false);
        setSearchParam('');
        setId(-1);
        setValue('');
    }

    function removeItem() {
        let filtered = data.filter(row => !Object.is(row.id, Number(searchParam)) && !Object.is(row.value, searchParam));
        setData(filtered);
        setRemoveFlag(false);
    }

    function createItem() {
        if (Object.is(value, '') || Object.is(id, -1)) {
            return;
        }
        let item = {
            id: id,
            value: value,
        };
        setData([...data, item]);
        setCreateFlag(false);
    }

    function createHtlm() {
        return <>
            <Form.Group as={Row}>
                <Form.Label className="text-center" column sm="3">
                    Id
                    </Form.Label>
                <Col sm="8">
                    <Form.Control type="number" value={id} onChange={(e) => setId(e.target.value)}
                        placeholder="Type id"/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label className="text-center" column sm="3">
                    Value
                    </Form.Label>
                <Col sm="8">
                    <Form.Control type="text" value={value} onChange={(e) => setValue(e.target.value)}
                        placeholder="Type value"/>
                </Col>
            </Form.Group>
        </>
    }

    function removeHtlm() {
        return <Form.Group as={Row}>
            <Col sm="8">
                <Form.Control type="text" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}
                    placeholder="Type id or value in order to delete" />
            </Col>
        </Form.Group>
    }


    return (
        <Row>
            <Col lg={2} md={2} xs={4}>
                <h4>Action</h4>
                <Button variant="outline-info" onClick={() => setCreateFlag(true)} block>Add</Button>
                <br/>
                <Button variant="outline-danger" onClick={() => setRemoveFlag(true)} block>Delete</Button>
            </Col>
            <Col lg={6} md={6} xs={8}>
                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, index) => {
                                return <tr key={index} >
                                    <td>{row.id}</td>
                                    <td>{row.value}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </Table>
            </Col>
            <Modal show={removeFlag || createFlag} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {
                            createFlag ? "Create item" : "Delete item"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className = "text-center">
                    {
                        createFlag ? createHtlm() : removeHtlm()
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => createFlag ? createItem() : removeItem()}>
                        {
                            createFlag ? "Add" : "Delete"
                        }
                    </Button>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Row>
    );
}

export default TableComponent;