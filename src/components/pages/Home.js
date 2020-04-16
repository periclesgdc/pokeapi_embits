import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

const ROOT_URL = 'https://pokeapi.co';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount = () => {

  }

  getAuth = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Entre com seu usuário</h4>
        <h5>O login permite acesso total aos recursos</h5>

        <div className="mt-5">
          <Form onSubmit={this.getAuth}>
            <Form.Group>
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>

            <Button variant="success" type="submit">Entrar</Button>
          </Form>
        </div>
      </div>
    );
  }
}