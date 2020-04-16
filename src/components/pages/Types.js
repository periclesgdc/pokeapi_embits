import React, { Component } from 'react';
import { Nav, Badge } from 'react-bootstrap';

const ROOT_URL = 'https://pokeapi.co';

export default class Pokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types: [],
      count: 0,
      page: 1,
      maxPage: 0,
    }
  }

  componentDidMount = () => {
    // Types
    fetch(ROOT_URL + '/api/v2/type/').then(
      response => response.json()
    ).then(
      data => this.setState({
        types: data.results,
        count: data.count,
        maxPage: parseInt((data.count)/20),
      })
    )
  }

  componentWillUpdate = () => {
    // Types
    fetch(ROOT_URL + '/api/v2/type/?limit=20&offset='+20*this.state.page).then(
      response => response.json()
    ).then(
      data => this.setState({
        pokemons: data.results,
      })
    );
  }

  paginate = (value) => {
    this.setState({ page: this.state.page + (value) });
  }

  render() {
    return (
      <div className="container-fluid">
        <h5>Listagem de Tipos</h5>
        <ul>
          { this.state.types.map(type => <li>{ type.name }</li>) }
        </ul>

        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="#" onClick={ () => this.paginate(-1)} disabled={ this.state.page > 1 ? false : true }>Anterior</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Badge variant="secondary">{ this.state.page }</Badge>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" onClick={ () => this.paginate(1)} disabled={ this.state.page < this.state.maxPage ? false : true }>Próximo</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}