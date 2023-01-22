import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./components.module.scss";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export function UsersTable(props) {
    return (<Form className={styles.formTb}><Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Last login time</th>
            <th>Registration time</th>
            <th>Status</th>
            <th><InputGroup.Radio aria-label="Radio button for following text input" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </Table>
      <Button as="input" type="submit" value="Submit" className={styles.btn}/>
      </Form>)
}