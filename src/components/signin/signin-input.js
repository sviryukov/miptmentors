import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default (props) => {
    return (
        <Form.Group as={Row}>
            <Col xs={3}>
                <Form.Label htmlFor={props.name}>
                    {props.text}
                </Form.Label>
            </Col>
            <Col xs={9}>
                <Form.Control type={props.type} name={props.name} id={props.name}/>
            </Col>
        </Form.Group>
    );
};