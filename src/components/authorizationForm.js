import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./components.module.scss";

export function AuthorizationForm(props) {
    return (<Form className={styles.form}>
            <Form.Text id="passwordHelpBlock" muted>SIGN IN</Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your registred email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button as="input" type="submit" value="Submit" className={styles.btn}/>
        </Form>)
}